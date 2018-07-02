import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';


class App extends Component {
  constructor(){
    super()
    
    this.state = {
      input: null
    }

  }

  

  appInputUp(savedValue){
    console.log(savedValue)
    console.log("heow heow")
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input saveOurValue={() => this.appInputUp(savedValue)}/>
        <h2> {this.props.startInput} </h2>
      </div>
    );
  }
}

export default App;
