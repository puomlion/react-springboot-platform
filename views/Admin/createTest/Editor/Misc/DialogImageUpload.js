import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dropzone from 'react-dropzone'
import Typography from '@material-ui/core/Typography';


class DialogImageUpload extends React.Component {
  state = {
    open: false,
    disable : this.props.disable,
    file : null,
  };

  handleSubmit = () => {
    const file = this.state.file;
    this.props.upload(file)
    this.setState({open : false})
  }
  handleClickOpen = () => {
      this.setState({open :true})
  }

  handleFile = (e) => {
      const file = e[0]
      this.setState({file : file})
  }

  componentDidUpdate(){
    if(this.props.submitButtonPressed){
      this.setState({file: null})
    }
  }

  render() {

    return (
      <div>
        <Button disabled = {this.state.disable} variant="contained" onClick={this.handleClickOpen} color="primary" >
            Upload 
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={false}
        >
          <div style={{width: 1200}}>
          <DialogContent>
              
          <div className="card" style = {{height: '18vw'}}>
                <Dropzone   className = "ignore"
                            accept = "image/*" 
                            onDropAccepted = {(e) => {
                                this.handleFile(e)
                            }}
                            onDropRejected = {() => this.message = "File type not supported"}
                >
                <div style = {{height: '18vw'}}>
                {this.state.file ? <img style = {{width: "14vw"}} src = {this.state.file.preview} /> : 
                    <Typography variant="subheading" gutterBottom>
                            Drop anywhere on the screen
                    </Typography>}
                </div>
                
                </Dropzone>
          </div>

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

export default DialogImageUpload;