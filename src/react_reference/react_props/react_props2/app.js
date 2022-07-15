import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Content />
    </div>
  )
}

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'nitesh'
        }
    }
    render(){
        const {name} = this.state
        return(
            <>
            {name}</>
        )
    }
}