import React, {Component} from 'react';
import './Input.css';

export default class Input extends Component {
    constructor(props){
        super(props)

        this.state = {
            startInput: '',
            savedValue: ''
        }
    }
    
    userInput(e){
        this.setState({
            startInput: e
        })
        console.log(e);
    }

    handleSave(){
        let tempInput = this.state.startInput
        this.setState({
            savedValue: tempInput
        }),
        
        this.props.saveOurValue(this.savedValue);
       
    }
    
    render(){
        return (
            <div>
            <input id="userInput" onChange={ (e) => this.userInput(e.target.value)}  />
            <button id="saveButton" onClick={ () => this.handleSave()}> Save </button>
            </div>
        )
    };
}