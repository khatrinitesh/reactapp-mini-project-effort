import React from 'react'

export default function CustomList({id,text,btnDel}) {
  return (
    <div>
        {text}
        <div>
            <button onClick={() => btnDel(id)}></button>
        </div>
    </div>
  )
}
