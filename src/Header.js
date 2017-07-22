import React, { Component } from 'react';
import './Header.css'
export default class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="header-text">
        <h1>Star Wars</h1>
        <hr></hr>
        <h5>The Vehicles of Star Wars</h5>
        </div>
      </div>
    )
  }
}
