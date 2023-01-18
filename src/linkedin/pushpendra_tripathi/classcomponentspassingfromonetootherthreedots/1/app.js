import React, { Component } from 'react';
import Wrap from './wrap';

export default class CustomApp extends Component {
  render() {

    const cssstyle = {
        color:'red'
    }
    return (
      <div>
        <Wrap style={{backgroundColor:'yellow'}} css={cssstyle} name="Nitesh Khatri" mobile="9920767524" email="nitesh.khatri88@gmail.com"/>
      </div>
    )
  }
}
