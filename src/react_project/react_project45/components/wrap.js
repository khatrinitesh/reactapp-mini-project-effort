import React, { Component } from 'react'

export default class Wrap extends Component {
  render() {
    return (
      <div {...this.props}>
        <h2 style={this.props.css}>{this.props.name}</h2>
        <pre>{this.props.mobile}</pre>
        <p>{this.props.email}</p>
      </div>
    )
  }
}