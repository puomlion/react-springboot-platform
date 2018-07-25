import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  state = {
    open: true,
  };

  handleSubmit = () => {
    this.props.submit()
    this.setState({open : false})
  }

  render() {
    return (
      <div>
        {/* <Button variant="contained" onClick={this.handleClickOpen} color="primary" >
            Upload 
          <FileUpload />
        </Button> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={false}
        >
          <div style={{width: 1200}}>
          <DialogContent>
              
              {this.props.children}

          </DialogContent>
          </div>
          <DialogActions>
            <Button variant="contained" onClick = {this.handleSubmit} color="primary">
                Submit
            </Button>

            <Button onClick={() => {this.setState({open:false})}} variant="contained" color="secondary">
                Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;