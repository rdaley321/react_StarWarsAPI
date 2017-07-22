import React, { Component } from 'react';
import PersonName from './PersonName'
import './Form.css'

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: this.props.initialName
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
  }

  render(){
    return (
      <div className="form">
        <h2>What is your name, pilot?</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleNameChange}  type="text" placeholder="Enter your name"/>
          <br></br>
          <button type="submit" name="button">Submit</button>
        </form>
        <PersonName name={this.state.name} />
      </div>
    )
  }
}
