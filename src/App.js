import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';



class App extends React.Component {

  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };


  render(){
  const isActive = this.state.isActive;
  return (
    <React.Fragment>

    <h>Sliding Puzzle React</h>


    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item" id={isActive ? "app" : null} onClick={this.handleToggle}>8</div>


      <div class="reset-button">
          <button onClick={this.handleToggle}>Reset</button>
      </div>

    </div>



    </React.Fragment>
  )}
}

export default App;
