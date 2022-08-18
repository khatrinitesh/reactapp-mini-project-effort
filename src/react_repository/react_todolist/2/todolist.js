import React from 'react';
import Todo from './todo';

export default function ToDolist({todos,toggleTodo}) {

  return (
    <div>
        {todos.map(todo => {
            return <Todo key={todo.id} toggleToDo={toggleTodo} todo={todo}/>
        })}
    </div>
  )
}
