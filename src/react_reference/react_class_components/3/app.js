import React, { Component } from 'react'

export default class CustomApp extends Component {
  render() {
    return (
      <div>
        <Counter/>
      </div>
    )
  }
}


class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
        this.handleInc = this.handleInc.bind(this)
        this.handleDec = this.handleDec.bind(this)
        this.handlereset = this.handlereset.bind(this)
    }

    handleInc() {
        this.setState(previousValue => ({
            count:previousValue.count  + 1
        }))
    }
    handleDec(){
        this.setState(previousValue => ({
            count:previousValue.count  - 1
        }))
    }
    handlereset(){
        this.setState({
            count:0
        })
    }
    render(){
        console.log('render counter')
        return(
            <>
             <div>
                <button onClick={this.handleInc}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleDec}>-</button>
                <br/>
                <button onClick={this.handlereset}>reset</button>
             </div>
            </>
        )
        }
    }