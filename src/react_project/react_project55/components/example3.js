import React from 'react'

export default function CustomExample() {
  return (
    <div>
        <h3> My buttons example </h3>
        <Button disabled>Disabled</Button>
        <Button>Normal Button</Button>
    </div>
  )
}


const Button = (props) => {
    const { disabled, children } = props;

    function handleClick() {
        console.log("you clicked me!");
      }
      function handleDisabledEvent(event) {
        event.preventDefault();
      }
    return(
        <>
       <button
      aria-disabled={disabled}
      className={disabled ? "btn btn-disabled" : "btn btn-secondary"}
      onClick={disabled ? handleDisabledEvent : handleClick}
    >
      {children}
    </button>
        </>
    )
}