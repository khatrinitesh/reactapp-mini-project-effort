import React, { Component } from 'react'

export default class CustomApp extends Component {
  render() {
    return (
      <div>
        <CustomDatePicker/>
      </div>
    )
  }
}

class CustomDatePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentDate:null
        }
        this.handleDateSelected = this.handleDateSelected.bind(this);
    }

    handleDateSelected({target}){
        this.setState({
            currentDate:target.value
        });
    }

    render(){
        return(
            <>
            <DatePicker handleDateSelected={this.handleDateSelected}/>
            <pre>
                {JSON.stringify(this.state)}
            </pre>
            </>
        )
    }

    
}

const DatePicker = (props) => {
    return(
        <>
         <input type='date' onChange={props.handleDateSelected}/>
        </>
    )
}
