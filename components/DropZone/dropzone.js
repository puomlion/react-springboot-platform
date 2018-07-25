import React from 'react';
import Dropzone from 'react-dropzone'
import Typography from '@material-ui/core/Typography';

const DropZone = (props) => {
    
    let file = null;

    return(
        <Dropzone   className = "ignore"
                            accept = "image/*" 
                            onDropAccepted = {(e) => {
                                this.file = e[0]
                                props.upload(e[0])
                            }}
                            onDropRejected = {() => console.log('rejected')}
                >
                <div style = {{height: '18vw'}}>
                {this.file ? <img style = {{width: "14vw"}} src = {this.file.preview} /> : 
                    <Typography variant="subheading" gutterBottom>
                            Drop anywhere on the screen
                    </Typography>}
                </div>
        </Dropzone>
    )

}

export default DropZone;