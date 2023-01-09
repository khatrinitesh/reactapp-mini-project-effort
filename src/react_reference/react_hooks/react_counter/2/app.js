import React, { Component } from 'react'

export default class CustomApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0,
        }
        this.btnHandleInc = this.btnHandleInc.bind(this);
    }

    btnHandleInc = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

    componentDidMount(){
        document.title = `you clickd ${this.state.count} times`
    }

    componentDidUpdate(){
        document.title = `you clickd ${this.state.count} times`
    }

    
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.btnHandleInc}>+</button>
      </div>
    )
  }
}
