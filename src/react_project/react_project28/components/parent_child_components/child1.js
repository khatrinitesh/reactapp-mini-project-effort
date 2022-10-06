import React, { Component } from 'react';

export default class ChildOne extends Component {

    onTrigger = (e) => {
        this.props.parentCallback(e.target.myname.value)
        e.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onTrigger}>
            <input type='text' name='myname' placeholder="Enter Name"/>
            <br/><br/><br/>
            <input type='submit' value="Submit"/>
            <br/><br/><br/>
        </form>
      </div>
    )
  }
}
