import React, {Component} from 'react';
import './Input.css';

export default class Input extends Component {
    constructor(props){
        super(props)

        this.state = {
            startInput: '',
        }
    }
    
    
    render(){
        return (
            <div>
            <input id="userInput" onChange={ (e) => this.setState({startInput: e.target.value})}  />
            <button id="saveButton" onClick={ () => this.props.appInputUp(this.state.startInput)}> Save </button>
            </div>
        )
    };
}