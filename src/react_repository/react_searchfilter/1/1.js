import React, { Component } from 'react'
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

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then(json => this.setState({data:json}));
    }

    handleChange(e){
        const {value} = e.target;
        this.setState({value})
    }

  render() {
      const {data,value} = this.state;
    return (
      <div>
          <input type="text" value={value} onChange={this.handleChange}/>
          <FilterResults value={value} data={data} renderResults={results => (
              <div>
                  {results.map((el) => {
                      return(
                          <div>
                              <span>{el.name}</span>
                              <span>{el.email}</span>
                          </div>
                      )
                  })}
              </div>
          )}/>
      </div>
    )
  }
}
