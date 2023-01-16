import React from 'react'

const Button = (props)  => {
    console.log(props);
  return (
    <div>
        <button style={{color:'red',background:'yellow',padding:'12px'}}>{props.label}</button>
    </div>
  )
}

export default Button;