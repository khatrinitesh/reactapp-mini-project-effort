import React from 'react'

export default function ChangesProp() {
  return (
    <div>
        <HeaderOne name="header 1" desc="lorem ipsum 1" />
        <HeaderTwo name="header 2" desc="lorem ipsum 2"/>
    </div>
  )
}

const HeaderOne = (props) => {
    return(
        <header>
            {props.name}
            {props.desc}
        </header>
    )
}
const HeaderTwo = (props) => {
    return(
        <header>
            {props.name}
            {props.desc}
        </header>
    )
}
