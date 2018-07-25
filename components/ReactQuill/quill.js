import React from 'react'
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.bubble.css';
import './quill.css'

const Quill = (props) => {

    return(
            <ReactQuill 
              theme="snow"
              onChange={(value) => props.handleTextChange(value)}
              value={props.value}
              modules={Quill.modules}
              formats={Quill.formats}
              bounds={'.app'}
              placeholder="Your question here..."
            />
    )

} 

Quill.modules = {
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
  
  Quill.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'video'
  ]

  export default Quill