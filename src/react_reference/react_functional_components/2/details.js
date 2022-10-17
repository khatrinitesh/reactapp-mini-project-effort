import React from 'react'

export default function Details(props) {

    console.log(props)
  return (
    <div>
        I am a good {props.gender}
    </div>
  )
}

Details.defaultProps = {
    gender :'UnKnown'
}