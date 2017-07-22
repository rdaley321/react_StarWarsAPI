import React, { Component } from 'react';

export default class PersonName extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   name: this.props.name
    // }
  }

  // componentWillReceiveProps(newProps, oldProps){
  //   this.setState({
  //     name: newProps.name
  //   })
  // }
  render(){
    return (
      <div>
        <h1 style={{fontSize: 20}}>{this.props.name} </h1>
      </div>
    )
  }
}
