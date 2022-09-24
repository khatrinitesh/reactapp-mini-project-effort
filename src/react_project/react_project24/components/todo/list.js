import React from 'react';

export default function CustomList({id,text,delItem}) {
  return (
    <div>
        {text}
        <button onClick={() => delItem(id)}>Delete</button>
    </div>
  )
}
