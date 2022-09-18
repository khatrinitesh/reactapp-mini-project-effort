import React from 'react'

export default function CustomList({id,text,delItem}) {
  return (
    <div>
        <li>{text}</li>
        <button onClick={() => delItem(id)}>Remove</button>
    </div>
  )
}
