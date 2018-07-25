import React , { Component } from 'react'

import Dialog from '../../UI/Dialog/Dialog' 
import Select from '../../UI/Select/Select'
import Card from '../../UI/Card/card'
import axios from 'axios'


class QuestionBank extends Component {

    state = {
        cards : [
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'image' : "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/strangerthings.jpg?itok=6plPPKU7&resize=1100x619" , 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state. It replace the items given in arguments, and triggers a render() to apply the modification to the DOM.' , 'answers' : 'Back to you, stranger things, 13 reasons why, Closer' ,'id': 1},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'question' : 'The beginning of this ' ,'answers' : 'Back to you, stranger things, 13 reasons why, Closer','id': 2},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state. It replace the items given in arguments, and triggers a render() to apply the modification to the DOM. We need to bind the arrows onclick events with moveCard. The rendering function will then look like:' ,'answers' : 'Back to you, stranger things, 13 reasons why, Closer','id': 3},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'image' : "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/strangerthings.jpg?itok=6plPPKU7&resize=1100x619", 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state.' , 'answers' : 'Back to you, stranger things, 13 reasons why, Closer' ,'id': 4},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state.' , 'answers' : 'Back to you, stranger things, 13 reasons why, Closer' ,'id': 4},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state. It replace the items given in arguments, and triggers a render() to apply the modification to the DOM. We need to bind the arrows onclick events with moveCard. The rendering function will then look like:' ,'answers' : 'Back to you, stranger things, 13 reasons why, Closer','id': 3},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'image' : "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/strangerthings.jpg?itok=6plPPKU7&resize=1100x619" , 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state. It replace the items given in arguments, and triggers a render() to apply the modification to the DOM.' , 'answers' : 'Back to you, stranger things, 13 reasons why, Closer' ,'id': 1},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'question' : 'The beginning of this ' ,'answers' : 'Back to you, stranger things, 13 reasons why, Closer','id': 2},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state. It replace the items given in arguments, and triggers a render() to apply the modification to the DOM. We need to bind the arrows onclick events with moveCard. The rendering function will then look like:' ,'answers' : 'Back to you, stranger things, 13 reasons why, Closer','id': 3},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'image' : "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/strangerthings.jpg?itok=6plPPKU7&resize=1100x619", 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state.' , 'answers' : 'Back to you, stranger things, 13 reasons why, Closer' ,'id': 4},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state.' , 'answers' : 'Back to you, stranger things, 13 reasons why, Closer' ,'id': 4},
            {'type': 'Java', 'indORGrp' : 'Individual' ,'Format': 'Easy', 'question' : 'The beginning of this function is pretty straightforward, we copy the list and change the order of a particular item. The major concept to remember is the this.setState. This function is the only way that should be used to edit the state. It replace the items given in arguments, and triggers a render() to apply the modification to the DOM. We need to bind the arrows onclick events with moveCard. The rendering function will then look like:' ,'answers' : 'Back to you, stranger things, 13 reasons why, Closer','id': 3},
        ],
        
        subject : 'Java',
        groupedOrIndividual : '0',
        difficulty : '0',
        type : '0',
    }

    // componentDidUpdate(){
    //     const data = {

    //     }
    //     axios.post('/view-question', data)
    //         .then(resp => this.setState({something : resp.data}))
    // }

    handleSubject = (value) => {
        const val = value
        this.setState({subject : val})
    }

    handleFormat = (value) => {
        const val = value
        this.setState({groupedOrIndividual : val})
    }

    handleType = (value) => {
        const val = value
        this.setState({type : val})
    }

    handleDifficulty = (value) => {
        const val = value
        this.setState({difficulty : val})
    }

    render(){

        let elements = this.state.cards.map((element,index) => {
            return(
                <div key = {index}>
                    <Card element = {element} key = {index} />
                </div>
            )
        })

        return(
            <div className = "page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <ul>
                                    <li style = {{float: 'left'}}>
                                        <Dialog type = {(value) => this.handleSubject(value)} />
                                    </li>
                                    <li style = {{float: 'left'}}>
                                        <Select content =  {[ {value : "0" , label : "Individual" , key : "1"}, {value : "1" , label : "Grouped", key : "2"}]} title = "Select Format" default_value = {this.state.groupedOrIndividual}
                                            callback_func = {(value) => this.handleFormat(value)} />
                                    </li>
                                    <li style = {{float: 'left'}}>
                                        <Select content =  {[{value : "0" , label : "Multiple Choice Question" , key : "1"}, {value : "1" , label : "Subjective", key : "2"}, {value : "2" , label : "Code", key : "3"}]} title = "Select Type" default_value = {this.state.type}
                                            callback_func = {(value) => this.handleType(value)} />
                                    </li>
                                    <li style = {{float: 'left'}}>
                                        <Select content =  {[{value : "0" , label : "Easy" , key : "1"}, {value : "1" , label : "Medium", key : "2"}, {value : "2" , label : "Hard", key : "3"}]} title = "Select Difficulty" default_value = {this.state.difficulty}
                                            callback_func = {(value) => this.handleDifficulty(value)} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {elements}
                    </div>
                </div>
            </div>
        )
    }
}


export default QuestionBank