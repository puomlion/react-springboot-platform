import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from '../../../UI/Dialog/Dialog'
import Select from '../../../UI/Select/Select'
import RadioButton from '../../../UI/RadioButton/RadioButton'
import GroupIndividual from './Misc/groupIndividual'
import Snackbar from '../../../UI/Snackbar/Snackbar'
import QuestionEditor from './Misc/questionEditor'
import axios from 'axios'

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const initialState = {
    activeStep: 0,
    type : "None",
    groupedOrIndividual : "0",
    imageOrPara : null,
    paragraph : null,
    file : null,
    format : 1,
    disableAddOption : false,
    disableUploadImage : false,
    openDialog : false,
    variant : "",
    message : ""
}


class Editor extends Component {
  state = {
    activeStep: 0,
    type : "None",
    groupedOrIndividual : "0",
    imageOrPara : null,
    paragraph : null,
    file : null,
    format : 1,
    disableAddOption : false,
    disableUploadImage : false,
    openDialog : false,
    variant : "",
    message : ""
  };

  getSteps = ()  => {
    return ['Select Categories', 'Select Type', 'Select Format', 'Write your question here'];
  }
  
  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
            <div className="col-4 card" style = {{margin : 'auto'}} >
              <Dialog type = {(value) => this.handleType(value)} />
            </div>
        );
      case 1:
        return (
            <div className="col-4 card" style = {{margin : 'auto'}} >
               <RadioButton content =  {[ {value : "0" , label : "Individual" , key : "1"}, {value : "1" , label : "Grouped", key : "2"}]} title = "Grouped Individual" default_value = {this.state.groupedOrIndividual}
                    callback_func = {(value) => this.handleGroupIndividual(value)} />
            </div>
        );
      case 2:
        return (
            <div className="col-4 card" style = {{margin : 'auto'}} >
              <Select content =  {[{value : 1 , label : "Multiple Choice Question" , key : "1"}, {value : 2 , label : "Subjective", key : "2"}, {value : 3 , label : "Code", key : "3"}]} title = "Select Type" default_value = {this.state.format}
                 callback_func = {(value) => this.handleFormatChange(value)} />      
            </div>
        );
      case 3:
        return (
          <div style = {{margin : 'auto'}} >
              <QuestionEditor disableAddOption = {this.state.disableAddOption} disableUploadImage = {this.state.disableUploadImage} handleQuestionPaperSubmit = {(question , option , checked , difficulty, file, imageUploadOrNot) => this.handleQuestionPaperSubmit(question , option , checked , difficulty, file, imageUploadOrNot )} />
          </div>
        )
      default:
        return 'Unknown step';
    }
  }

  handleQuestionPaperSubmit = (question , option , checked , difficulty, file, imageUploadOrNot) => {
       
        let fileTransfer = this.state.file
        if(imageUploadOrNot === 1){
          fileTransfer = file
        }
        var optionObject = option.reduce(function(acc, cur, i) {
          acc[i] = cur;
          return acc;
        }, {});

        var questionObject = question.reduce(function(acc, cur, i) {
          acc[i] = cur;
          return acc;
        }, {});

        var checkedObject = checked.reduce(function(acc, cur, i) {
          acc[i] = cur;
          return acc;
        }, {});

        var difficultyObject = difficulty.reduce(function(acc, cur, i) {
          acc[i] = cur;
          return acc;
        }, {});

        var formData = new FormData();
        formData.append("type", this.state.type);
        formData.append("groupedOrIndividual", Number(this.state.groupedOrIndividual));
        formData.append("imageOrPara", Number(this.state.imageOrPara))
        formData.append("file", fileTransfer)
        formData.append("paragraph", this.state.paragraph)
        formData.append('format', this.state.format)
        formData.append('imageUploadOrNot', imageUploadOrNot),
        formData.append('difficulty', JSON.stringify(difficultyObject))
        formData.append('questions',  JSON.stringify(questionObject))
        
        if(this.state.format === 1){
          formData.append('options', JSON.stringify(optionObject)),
          formData.append('optionsCheck', JSON.stringify(checkedObject))
        }else{
          formData.append('options', null),
          formData.append('optionsCheck', null)
        }
        

        for (var value of formData.values()) {
          console.log(value);
        }
      
        axios.post('/add-question-to-questionbank', formData)
          .then(resp => {
              console.log(resp)
              if(resp.status === 200){
                const  openDialog = true
                const  variant = "success"
                const  message = resp.data.message
                
                this.setState({openDialog:openDialog,variant:variant,message:message})
              }
          })
          .catch(err => console.log(err))
    
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleGroupIndividual = (value) => {
    const groupedOrIndividual = value
    let disableUploadImage = false;
    if(value === "1"){
      disableUploadImage = true;
    }
    this.setState({groupedOrIndividual : groupedOrIndividual, disableUploadImage : disableUploadImage })
  }

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState(initialState);
  };

  handleType = (value) => {
    const type = value
    this.setState({type : type})
  }

  handleFormatChange = (value) => {
    let disableAddOption = false
    if(value === 2 || value === 3){
        disableAddOption = true 
    }
    this.setState({ format : value , disableAddOption : disableAddOption });
  };

  closeHandler = () => {
        this.setState({openDialog : false})
  }

  handleGrouped = (value , index) => {
    
    if(index === 0){
      this.setState({paragraph : value , imageOrPara : 0})
    } else {
      this.setState({file : value, imageOrPara : 1})
    }

    this.setState((prevState, props) => ({
      activeStep: prevState.activeStep + 1
    })); 
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (

        <div className = "page-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card Editor">
                            <div className={classes.root}>
                                <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const props = {};
                                    const labelProps = {};
                                    
                                    return (
                                    <Step key={label} {...props}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                    );
                                })}
                                </Stepper>
                                <div>
                                {activeStep === steps.length ? (
                                    <div>
                                    <Typography className={classes.instructions}>
                                        All steps completed - you&quot;re finished
                                    </Typography>
                                    <Button onClick={this.handleReset} className={classes.button}>
                                        Reset
                                    </Button>
                                    </div>
                                ) : (
                                    <div>
                                      {this.getStepContent(activeStep)}
                                    <div>
                                        <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                        >
                                        Back
                                        </Button>
                                       
                                        <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                        >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                        {this.state.groupedOrIndividual === "1" ? <GroupIndividual handleGrouped = {(value,index) => this.handleGrouped(value , index)} /> : null}
                        {this.state.openDialog ? <Snackbar open = {this.state.openDialog} closeHandler = {() => this.closeHandler} variant = {this.state.variant} message = {this.state.message} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

Editor.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Editor);
