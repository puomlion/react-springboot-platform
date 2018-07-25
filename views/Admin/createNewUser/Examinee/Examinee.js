import React, { Component } from "react";
import axios from 'axios';
import Snackbar from '../../../UI/Snackbar/Snackbar'
import Form from '../Form/Form'
import '../../../../assets/stylesheets/css/lib/bootstrap/bootstrap.min.css';

const qs = require('qs')

class Examinee extends Component {

    state = {
        key : Date.now,
        openDialog : false,
        variant : "",
        message : ""
    }
   
    onSubmit = ({formData}) => {

        axios.post("/create-new-user/examinee" , qs.stringify(formData))
       // axios.post("https://jsonplaceholder.typicode.com/posts" , formData)
            .then(res => {
                console.log(res)
                const  openDialog = true
                const  variant = "success"
                const  message = "Created new user"
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
                                <Form key = {this.state.key} schema = {0} onSubmit = {(form) => this.onSubmit(form) } /> 
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

export default Examinee;
