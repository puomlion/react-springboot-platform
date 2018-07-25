import React , { Component } from 'react'
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import PropTypes from 'prop-types';
import './TextEditor.css'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import RadioButton from '../../../../UI/RadioButton/RadioButton'
import ImageUpload from '../Misc/DialogImageUpload'


const initialIndividualState = {
        body: '',
        question : [], 
        difficulty : "1",
        difficultyArray : [],
        options: [],
        optionsArrayofArray : [],
        fileUpload : null,   
        imageUploadOrNot : 0,
        checked : [],
        checkedArrayofArray : [],
        submitButtonPressed : false
}

const initialGroupedState = {
    body: '',
    difficulty : "1",
    options: [],
    fileUpload : null,   
    imageUploadOrNot : 0,
    checked : [],
    submitButtonPressed : false
}

class questionEditor extends Component {

    constructor (props) {
        super(props)
        this.state = { 
            body: '',
            question : [], 
            difficulty : "1",
            difficultyArray : [],
            disableAddOption : this.props.disableAddOption,
            disableUploadImage : this.props.disableUploadImage,
            options: [],
            optionsArrayofArray : [],
            fileUpload : null,
            imageUploadOrNot : 0,   
            checked : [],
            checkedArrayofArray : [],
            submitButtonPressed : false
        }
        this.handleTextChange = this.handleTextChange.bind(this)
    }
    
    handleTextChange = (html) => {
        this.setState({ body: html });
    }

    handleFileUpload = (e) => {
        const file = e
        const imageUploaded = 1
        this.setState({fileUpload:file , imageUploadOrNot : imageUploaded})
    }

    handleDifficulty = (value) => {
        const diff = value;
        this.setState({difficulty : diff})
    }

    handleOptionValue = (index) => e => {
        let options = [...this.state.options]
        options[index] = e.target.value
        this.setState({
            options
        })
    }

    addOption = e => {
        e.preventDefault()
        let options = this.state.options.concat([''])
        let checked = [...this.state.checked , false]
        this.setState({
            options,
            checked
        })
    }

    handleDelete = i => e => {
        e.preventDefault()
        let options = [
          ...this.state.options.slice(0, i),
          ...this.state.options.slice(i + 1)
        ]
        let checked = [
            ...this.state.checked.slice(0, i),
            ...this.state.checked.slice(i + 1)
        ]
        this.setState({
          options,
          checked
        })
    }

    handleCheckboxChange = (event, index) => {
        let checked = [...this.state.checked]
        checked[index] = event.target.checked
        this.setState({
            checked
        })
    };

    handleInitialize = (value) => {
        const body = this.state.body
        let question = [...this.state.question]
        question.push(body)
        
        let options = [...this.state.options].join('$#')
        let optionsArrayofArray = [...this.state.optionsArrayofArray]
        optionsArrayofArray.push(options)
        
        let checked = [...this.state.checked].join('$#')
        let checkedArrayofArray = [...this.state.checkedArrayofArray]
        checkedArrayofArray.push(checked)
        
        const difficulty = this.state.difficulty;
        let difficultyArray = [...this.state.difficultyArray]
        difficultyArray.push(difficulty)

        const submitButtonPressed = true
        
        this.setState(
            {
                question : question, optionsArrayofArray : optionsArrayofArray , checkedArrayofArray : checkedArrayofArray, difficultyArray : difficultyArray, submitButtonPressed : submitButtonPressed
            },
            function() { 
                this.setState(initialGroupedState)
                if(value){
                    this.handleSubmit()
                }
            }
        )
    }

    handleSubmit = () => {
        const questionArray = this.state.question
        const options = this.state.optionsArrayofArray
        const checked = this.state.checkedArrayofArray
        const difficulty = this.state.difficultyArray
        const file  = this.state.fileUpload
        const imageUploadOrNot =  this.state.imageUploadOrNot
        this.props.handleQuestionPaperSubmit(questionArray , options , checked , difficulty , file , imageUploadOrNot)
        this.setState(initialIndividualState)
    }

    render(){

        let nextButton = null;
        if(this.state.disableUploadImage){
            nextButton = <Button onClick = {() => this.handleInitialize(false)} variant="contained" color="primary">
                            Next Question
                        </Button>
        }

        return(
                    <div>  
                            <div className = "card questionEditor">
                                    <div style = {{marginLeft : "auto"}} >
                                        <ImageUpload disable = {this.state.disableUploadImage}  upload = {(e) => this.handleFileUpload(e)} submitButtonPressed = {this.state.submitButtonPressed} />
                                    </div>
                                <ReactQuill 
                                    theme="bubble"
                                    onChange={this.handleTextChange}
                                    value={this.state.body}
                                    modules={questionEditor.modules}
                                    formats={questionEditor.formats}
                                    bounds={'.app'}
                                    placeholder="Your question here..."
                                />
                            </div>
                            <div className="col-8 card float-lg-left"  >
                                {this.state.options.map((option, index) => (
                                    <span key={index}>
                                        <TextField
                                            style= {{width: "300px"}}
                                            id="input"
                                            label="Answers"
                                            type="text"
                                            margin="normal"
                                            onChange={this.handleOptionValue(index)}
                                            value={option}
                                            disabled = {this.state.disableAddOption}
                                        />
                                        <Checkbox
                                            checked={this.state.checked[index]}
                                            onChange={(e) => this.handleCheckboxChange(e , index)}
                                            disabled = {this.state.disableAddOption}
                                        />
                                        <IconButton onClick={this.handleDelete(index)}  aria-label="Delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </span>
                                    ))}
                                    <Button disabled = {this.state.disableAddOption} variant="fab" color="primary" aria-label="add" style = {{marginLeft : "auto"}} onClick={this.addOption} >
                                        <AddIcon />
                                    </Button>
                            </div>
                            <div className="col-4 card" > 
                                <RadioButton content =  {[ {value : "1" , label : "Easy" , key : "1"}, {value : "2" , label : "Medium", key : "2"}, {value : "3" , label : "Hard", key : "3"}]} default_value = {this.state.difficulty} title = 'Difficulty'
                                        callback_func = {(value) => this.handleDifficulty(value)} />
                            </div>
                            <div className = "col-12" style = {{justifyContent :"flex-end", display : 'flex'}}>
                                {nextButton}
                                <Button onClick = {() => this.handleInitialize(true)} variant="contained" color="secondary">
                                    Submit
                                </Button>
                            </div>
                </div>
               
        )
    }

}


questionEditor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    },
  }
  
  questionEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'video'
  ]
  
  questionEditor.propTypes = {
    placeholder: PropTypes.string,
  }
  

export default questionEditor