import React from 'react';
import Form from "react-jsonschema-form";


const FormSubmission = (props) => {

    const ExaminerSchema ={
        title: "Create New Examiner",
        type: "object",
        required: [
          "firstname",
          "lastname",
          "email",
          "password",
          "confPass",
          "contact"
        ],
        properties: {
          firstname: {
            type: "string",
            title: "First name",
            minLength: 3,
            
          },
          lastname: {
            type: "string",
            title: "Last name",
            minLength: 3,
            
          },
          email : {
            type : "string",
            format : "email",
            title : "Email",
            minLength: 3,
            
          },
          contact: {
            type: "string",
            title: "Contact",
            pattern: "^\\d*$",
            minLength: 10,
            
          },
          password: {
            type: "string",
            title: "Password",
            minLength: 3,
            
          },
          confPass: {
            title: "Confirm password",
            type: "string",
            minLength: 3,
            
          },
        }
    }

    const ExamineeSchema ={
        title: "Create New Examinee",
        type: "object",
        required: [
          "firstName",
          "lastName",
          "email",
          "contact",
          "college"
        ],
        properties: {
          firstName: {
            type: "string",
            title: "First name",
            minLength: 3,
            
          },
          lastName: {
            type: "string",
            title: "Last name",
            minLength: 3,
            
          },
          email : {
            type : "string",
            format : "email",
            title : "Email",
            minLength: 3,
            
          },
          contact: {
            type: "string",
            title: "Contact",
            pattern: "^\\d*$",
            minLength: 10,
            
          },
          college: {
            type: "string",
            title: "College",
            minLength: 3,
            
          }
        }
    }
    
    const uiSchema = {
        firstname: {
          "ui:autofocus": true,
          "ui:emptyValue": ""
        },
        lastname: {
            "ui:emptyValue": ""
        },
        password: {
          "ui:widget": "password",
        },
        confPass: {
            "ui:widget": "password",
        },
        email: {
            "ui:widget": 'email'
        },
        contact: {
          "ui:options": {
            "inputType": "tel"
          }
        }
      }
    
    function validate(formData, errors) {
    if (formData.confPass !== formData.password) {
        errors.confPass.addError("Passwords don't match");
    }
    if(!(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(formData.firstname))){
        errors.firstname.addError("Invalid first name.")
    }
    if(!(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(formData.lastname))){
        errors.lastname.addError("Invalid last name")
    }
    return errors;
    }

    function getSchema(value){
        if(value === 0){
            return ExamineeSchema;
        }else{
            return ExaminerSchema;
        }
    }
      
    return(
        <Form schema={getSchema(props.schema)}
            uiSchema={uiSchema}
            validate={validate}
            key = {props.key}
            onSubmit={(form) => props.onSubmit(form)} 
        >
        
        </Form>
    )
    
    
}

export default FormSubmission

