import React,{useState} from 'react';
import data from './data.json';
import ToDoList from './todolist';
import ToDoForm from './todoform';
import  './custom.scss';
export default function CustomApp() {

    const [toDoList,setToDoList] = useState(data)

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
          return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
      }
    
      const handleFilter = () => {
        let filtered = toDoList.filter(task => {
          return !task.complete;
        });
        setToDoList(filtered);
      }
    
      const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
      }
  return (
    <>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        <ToDoForm addTask={addTask}/>
    </>
  )
}
