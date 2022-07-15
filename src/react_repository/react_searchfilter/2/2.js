import React, { Component } from 'react';
import FilterResults from 'react-filter-search';

export default class CustomApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:[],
            value:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const {value} = e.target;
        this.setState({value})
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(json => this.setState({data:json}))
    }

  render() {
      const {value,data} = this.state
    return (
      <div>
          <input type="text" value={value} onChange={this.handleChange}/>
          <FilterResults value={value} data={data} renderResults={results => (
              <div>
                  {results.map((val) => {
                      return(
                          <div>
                              <h3>{val.name}</h3>
                              <p>{val.email}</p>
                          </div>
                      )
                  })}
              </div>
          )}/>
      </div>
    )
  }
}
