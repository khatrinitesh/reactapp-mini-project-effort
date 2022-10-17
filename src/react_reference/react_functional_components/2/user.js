import React from 'react';
import Details from './details';

export default function User(props) {
    console.log(props)
    // props.name = 'nitesh'
    // props.surname = 'khatri'
  return (
    <div>
        <h2>my name is {props.name} {props.surname}</h2>
        <Details gender={props.gender}/>
    </div>
  )
}

User.defaultProps = {
    name:'UnKnown',
    surname:'UnKnown'
}
