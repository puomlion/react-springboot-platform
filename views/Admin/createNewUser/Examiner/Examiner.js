import React, { Component } from "react";
import Form from '../Form/Form'
import axios from 'axios';
import Snackbar from '../../../UI/Snackbar/Snackbar'
import '../../../../assets/stylesheets/css/lib/bootstrap/bootstrap.min.css';

const qs = require('qs')

class Examiner extends Component {

    state = {
        key : Date.now,
        openDialog : false,
        variant : "",
        message : ""
    }
   
    onSubmit = ({formData}) => {
        axios.post("/create-new-user/examiner" , qs.stringify(formData))
            .then(res => {
                console.log(res)
                const  openDialog = true
                const  variant = "success"
                const  message = res.data.message
                const  my_date = Date.now()
                
                this.setState({openDialog:openDialog,variant:variant,message:message, key : my_date})
            })
            .catch(err => {
                console.log(err)
            })
        const  my_date = Date.now()
        this.setState({key : my_date})
        console.log("Data submitted: ",  formData);
    }

    closeHandler = () => {
        this.setState({openDialog : false})
    }

  render() {
    return (
        <div className = "page-wrapper">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <Form key = {this.state.key} schema = {1} onSubmit = {(form) => this.onSubmit(form) } />
                                {this.state.openDialog ? <Snackbar open = {this.state.openDialog} closeHandler = {this.closeHandler} variant = {this.state.variant} message = {this.state.message} /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Examiner;
