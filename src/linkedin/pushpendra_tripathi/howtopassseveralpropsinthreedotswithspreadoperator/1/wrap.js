import React from 'react'

export default function Wrap(props) {
  return (
    <div>
        <div {...props}>
            {props.label}
        </div>
    </div>
  )
}
