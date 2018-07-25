import React , { Component } from 'react'
import Dropzone from 'react-dropzone'
import Snackbar from '../../UI/Snackbar/Snackbar'
import axios from 'axios'
import Table from '../../../components/SimpleTable/simpleTable'
import csv from 'csv';


class File extends Component {

    state = {
        message : "Drag and drop anywhere on the screen",    
        messageSnackbar : "",
        openSnackbar : false,
        variant : "",
        data : []
    }

    closeSnackbarHandler = () => {
        this.setState({ openSnackbar: false });
      };

    onDrop  = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            csv.parse(reader.result, (err, data) => {
                data.shift()
                this.setState({data : data})
            });
        };
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');

        reader.readAsBinaryString(e[0]);

         var formData = new FormData();
         formData.append("file", e[0]);
         axios.post("http://192.168.43.205:8080/v1/admin/upload-file" , formData)
             .then(resp => {
                 console.log(resp)
                 const snackbar = true;
                 const apiMessage = resp.data.message;
                 const variant = "success"
                 this.setState({openSnackbar:snackbar,messageSnackbar:apiMessage, variant:variant})
                     
            })
            .catch(e => console.log("catching"))
        window.URL.revokeObjectURL(e[0].preview);
    }


    dropRejected = () => {
        const snackbar = true;
        //const apiMessage = resp.data.message;
        const apiMessage = "File type not supported";
        const variant = "error"
        this.setState({openSnackbar:snackbar,messageSnackbar:apiMessage, variant:variant})
    }

    render(){
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Dropzone   className = "ignore"
                        accept = "application/vnd.ms-excel,text/plain" 
                        onDropAccepted = {(e) => {
                                this.onDrop(e); 
                        }}
                        onDropRejected = {this.dropRejected}
                        onDragOver = {() => this.setState({message : "Drop it like it's hot"})}
                        onDragLeave = {() => this.setState({message : "Please don't go...come back"})} 
                        >

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <h1 style = {{marginBottom: "5px", fontWeight: "normal", textAlign: "center", color: "#1ABC9C"}}> {this.state.message} </h1>
                                </div>
                            </div>
                        </div>
                    </Dropzone>
                    <Table data = {this.state.data} />
                            {this.state.openSnackbar ? <Snackbar open = {this.state.openSnackbar} message = {this.state.messageSnackbar} variant = {this.state.variant} closeHandler = {this.closeSnackbarHandler} /> : null}
                </div>
            </div>
        )
    }

}

export default File;