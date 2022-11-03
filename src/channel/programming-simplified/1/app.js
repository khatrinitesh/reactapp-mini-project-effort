import React,{useState} from 'react';

export default function CustomApp() {

    const [task,setTask] = useState('')
    const [taskList,setTaskList] = useState([]);
    const [editId,setEditId] = useState(0);

    function handleSubmit(){
        if(task !== ""){
            setTaskList([...taskList,{task,id:`${task}-${Date.now()}`}]);
            setTask("");
        }

        if(editId){
            const editTask = taskList.find((i) => i.id === editId)
            const updatedTasks  = taskList.map((t) => t.id === editTask.id ? t={id:t.id,task} : {id:t.id,task:t.task})
            setTaskList(updatedTasks)
            setEditId(0);
            return;
        }
    }

    function handleDel(id){
        const finalData = taskList.filter((t) => t.id !== id)
        setTaskList([...finalData])
    }

    function handleEdi(id){
        const editTask = taskList.find((i) => i.id === id)
        setTask(editTask.task)
        setEditId(id)
    }


  return (
    <div>
        <input type="text" value={task} onChange={(e) => setTask(e.target.valule)}/>
        <button onClick={handleSubmit}>Add</button>

        <ul className='list'>
            {taskList.map((task) => {
                return(
                    <li key={task.id}>
                        {task.task}
                        <button onClick={() => handleDel(task.id)}>Remove</button>
                        <button onClick={() => handleEdi(task.id)}>Edit</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
