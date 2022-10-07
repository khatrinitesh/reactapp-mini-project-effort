import React,{useState} from 'react';

export default function CustomToDo() {

    const [todolList,setTodoList] = useState([]);
    const [newTask,setNewTask] = useState('');


    const handleChange = (e) => {
        setNewTask(e.target.value)
    }


  return (
    <div>
        <input type='text' onChange={handleChange}/>
        <button>Add Task</button>
        {newTask}
    </div>
  )
}
