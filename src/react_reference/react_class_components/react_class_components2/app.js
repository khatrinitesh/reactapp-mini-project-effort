import React, { Component } from 'react'

export default class CustomApp extends Component {
  render() {
    return (
      <div>
        <Example/>
      </div>
    )
  }
}


class Example extends React.Component{
    constructor(){
        super()
        this.state =  {
            sayings:''
        }
    }

    update(e){
        this.setState({sayings:e.target.value})
    }
    render(){
        return(
            <>
             Nitesh says <input type="text" onChange={this.update.bind(this)}/>
             <br/>
             <em>
                {this.state.sayings}
             </em>
            </>
        )
    }
}