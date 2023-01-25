import React, { useEffect } from 'react'

const Child = ({todos,addTodo}) => {

    useEffect(() => {
        console.log('child component re-rendered');
    })

    const handleToDo = () => {
        addTodo(`Items ${todos.length + 1}`)
    }

  return (
    <div>
        <h4>Child component</h4>
        <button onClick={handleToDo}>Add new Todo</button>
        {todos.map((item,index) => {
            return(
                <h5 key={index}>{item}</h5>
            )
        })}
    </div> 
  )
}

export default React.memo(Child);