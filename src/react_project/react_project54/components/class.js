import React, { Component } from 'react'

export default class CustomClass extends Component {

    state = {
        counter:0
    }

    handleClick = () => {
        this.setState(prevState => ({
            counter:prevState.counter + 1
        }))
    }


  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.handleClick}>increment</button>
      </div>
    )
  }
}
