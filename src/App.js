import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Vehicles from './Vehicles';

class App extends Component {
  render() {
    return (
      <div className="app-div">
        <Header />
        <Form initialName="Luke Skywalker" />
        <Vehicles />
      </div>
    );
  }
}

export default App;
