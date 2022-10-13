import React from 'react';

export default function Task(props) {
  return (
    <div className='task' style={{backgroundColor: props.completed ? 'green' : 'white'}}>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.id)}>Remove</button>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </div>
  )
}
