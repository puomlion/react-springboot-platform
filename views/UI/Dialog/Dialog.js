import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios'

const qs = require('qs')


class ConfirmationDialogRaw extends React.Component {
  radioGroup = null;

  constructor(props) {
    super(props);

    this.state.value = this.props.value;
  }

  state = {
    data : null,
    openAddNewType : false,
    newCategory : ''
  };

  handleAddNewTypeOpen = () => {
    this.setState({ openAddNewType: true });
  };

  handleAddNewTypeClose = () => {
    this.setState({ openAddNewType: false , newCategory : '' });
  };

  handleAddNewTypeSubmit = () => {
    const data = {
      type : this.state.newCategory
    }
    axios.post('/add-question-type', qs.stringify(data))
      .then(resp => {
        if(resp.status === 200){
          axios.get('/get-question-type')
            .then(resp => {
                const data = resp.data
                this.setState({data:data})
          })
        }
    })
    this.handleAddNewTypeClose()
  };

  handleCategoryChange = (event) => {
      this.setState({newCategory : event.target.value})
  }

  // TODO
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  componentDidMount(){
    axios.get('/get-question-type')
      .then(resp => {
          const data = resp.data
          this.setState({data:data})
      })
      .catch(er => console.log(er))
    
  }

  handleEntering = () => {
    this.radioGroup.focus();
  };

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  handleOk = () => {
    this.props.onClose(this.state.value);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, ...other } = this.props;

    return (
      <div>
        <Dialog
            open={this.state.openAddNewType}
            onClose={this.handleAddNewTypeClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add New Category</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add new category, please enter the name of the category
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="category"
                value = {this.state.newCategory}
                onChange = {(event) => this.handleCategoryChange(event)}
                label="Category"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleAddNewTypeClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleAddNewTypeSubmit} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Choose Subject</DialogTitle>
        <DialogContent>
          <RadioGroup
            ref={node => {
              this.radioGroup = node;
            }}
            aria-label="subject"
            name="subject"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {this.state.data ? this.state.data.map(option => (
              <FormControlLabel value={option.type} key={option.id} control={<Radio />} label={option.type} />
            )) : null}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
        <Button onClick={this.handleAddNewTypeOpen}>Add</Button>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    );
  }
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
};

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
});

class ConfirmationDialog extends React.Component {
  button = null;

  state = {
    open: false,
    value: 'None',
  };

  handleClickListItem = () => {
    this.setState({ open: true });
  };

  handleClose = value => {
    this.props.type(value)
    this.setState({ value, open: false });
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <List>
          
          <ListItem
            button
            divider
            aria-haspopup="true"
            aria-controls="subject-menu"
            aria-label="Choose subject category"
            onClick={this.handleClickListItem}
          >
            <ListItemText primary="Select Catagories" secondary={this.state.value} />
          </ListItem>
         
          <ConfirmationDialogRaw
            classes={{
              paper: classes.paper,
            }}
            open={this.state.open}
            onClose={this.handleClose}
            value={this.state.value}
          />
        </List>
      </div>
    );
  }
}

ConfirmationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmationDialog);
