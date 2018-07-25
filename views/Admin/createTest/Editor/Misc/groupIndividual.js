import React , { Component } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.bubble.css';
import './TextEditor.css'

import Quill from '../../../../../components/ReactQuill/quill'
import RadioButton from '../../../../UI/RadioButton/RadioButton'
import DialogFullScreen from '../../../../UI/Dialog/DialogFullScreen'
import DropZone from '../../../../../components/DropZone/dropzone'
import './TextEditor.css'
import ImageUpload from '../Misc/DialogImageUpload'

class GroupIndividual extends Component {
 
    state = {
        imageOrNot : "0",
        questionCommon : '',
        file : null,
    };

    handleFileUpload = (e) => {
        const file_uploaded = e
        this.setState({file : file_uploaded})
    }

    handleValueChanger = (value) => {
        const value_obtained = value
        this.setState({imageOrNot :value_obtained})
    }
    
    handleTextChange = (html) => {
        this.setState({ questionCommon: html });
    }

    handleSubmit = () => {
        const commonQuestion = this.state.questionCommon
        const file = this.state.file
        const imageOrNot = this.state.imageOrNot
        if(imageOrNot === "0"){
            this.props.handleGrouped(commonQuestion, 0)
        }else{
            this.props.handleGrouped(file,1)
        }
    }

    render() {

        const TextEditor = <div className="card">
                                <Quill handleTextChange = {(value) => this.handleTextChange(value)}
                                       value = {this.state.questionCommon}
                                />
                            </div>

        const Dropzone = <div className="card">
                            <DropZone upload = {(e) => this.handleFileUpload(e)} />
                        </div>

        return (
                <DialogFullScreen submit = {this.handleSubmit} >

                    <div className="col-2 card float-lg-left">
                        <RadioButton content =  {[ {value : "0" , label : "Paragraph" , key : "1"}, {value : "1" , label : "Image", key : "2"}]} default_value = {this.state.imageOrNot}
                            callback_func = {(value) => this.handleValueChanger(value)} />
                    </div>

                    <div>
                            {this.state.imageOrNot === "0" ? TextEditor : Dropzone }     
                    </div>
                    
                </DialogFullScreen>
            )
        }
}

GroupIndividual.modules = {
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
  
  GroupIndividual.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'video'
  ]


export default GroupIndividual;
