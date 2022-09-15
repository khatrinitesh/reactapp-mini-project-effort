import React from 'react'

export default function CustomList({id,text,deleteItem}) {
  return (
    <div className='items'>
        <li>{text}</li>
        <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  )
}
