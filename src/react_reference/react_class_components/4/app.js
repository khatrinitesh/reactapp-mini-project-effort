import React, { Component } from 'react'

export default class CustomApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            visible:true,
            name:'nitesh'
        }
    }
  render() {
    const {name} = this.state;
    return (
      <div>
        {this.state.visible && name}
      </div>
    )
  }
}
