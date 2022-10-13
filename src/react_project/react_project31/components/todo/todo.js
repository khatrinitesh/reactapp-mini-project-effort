import React,{useState} from 'react';
import Task from './task';

export default function CustomTodo() {

    const [todoList,setTodoList] = useState([])
    const [newTask,setNewTask] = useState('')

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    // const btnAddTask= () => {
    //     const newToDoList = [...todoList,newTask]
    //     setTodoList(newToDoList)
    // }

    const addTask = () => {
        const task = {
            id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName:newTask,
            completed:false,
        }
        setTodoList([...todoList,task])
    }

    // const handeldel = (taskname) => {
    //     const newToDoList = todoList.filter((task) => {
    //         if(task === taskname){
    //             return false
    //         }
    //         else{
    //             return true
    //         }
    //     })
    //     setTodoList(newToDoList)
    //   }

    const deleteTask = (id) => {
        const newToDoList = todoList.filter((task) => task.id !== id)
        setTodoList(newToDoList)
    }


    const completeTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if(task.id === id){
                    return {...task,completed:false};
                }
                else{
                    return task;
                }
            })
        )
    }

  return (
    <div>
        <div className='addTask'>
            <input type="text" onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
            {todoList.map((task,id) => {
                return(
                    <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} completeTask={completeTask} />
                )
            })}
        </div>
    </div>
  )
}
