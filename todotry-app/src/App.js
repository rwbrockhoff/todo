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

  

  appInputUp = (savedValue) => {
    this.setState({
      input: savedValue
    })
    console.log(this.state.input)
  }
   
 
    
  

  render() {
    return (
      <div className="App">
        <Header />
        <Input appInputUp={this.appInputUp}/>
        <h2> {this.props.startInput} </h2>
      </div>
    );
  }
}

export default App;
