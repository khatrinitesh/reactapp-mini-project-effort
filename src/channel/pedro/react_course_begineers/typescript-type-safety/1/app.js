import React from 'react';
import PropTypes from 'prop-types';



export default function CustomApp(props) {    
  return (
    <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person: {props.isMarried ? 'is' : 'is not'} MARRIED</h1>
        <h2><u>Friends:</u> {props.friends.map((friend) => {
            return(
                <h1>{friend}</h1>
            )
        })}
        </h2>
        <h2>Country: {props.country}</h2>
    </div>
  )
}

CustomApp.propTypes = {
    name:PropTypes.string,
    email:PropTypes.string,
    age:PropTypes.number,
    isMarried:PropTypes.bool,
    friends:PropTypes.arrayOf(PropTypes.string),
    country:PropTypes.string
}