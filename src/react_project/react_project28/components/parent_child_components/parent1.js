import React, { Component } from 'react';
import ChildOne from './child1';

export default class ParentOne extends Component {

    state ={
        name:''
    }

    handleCallBack = (childData) => {
        this.setState({name:childData})
    }
    
  render() {
    const {name} = this.state; 
    return (
      <div>
        <ChildOne parentCallback={this.handleCallBack} />
        {name}
      </div>
    )
  }
}
