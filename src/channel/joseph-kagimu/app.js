import React,{ useState }  from 'react';
import CustomTask from './components/task';
import './custom.scss';

export default function CustomApp() {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [editId, setEditId] = useState(0);

  //adding Task
  function AddTask() {
    if (task !== "") {
      setTaskList([...taskList, { task, index: `${task}-${Date.now()}` }]);
      setTask('');
    }

    if (editId) {
      const editTask = taskList.find((i) => i.index === editId);
      const updatedTasks = taskList.map((t) => 
        t.index === editTask.index ? t= {index: t.index , task} : {index: t.index, task: t.task}
      )
      setTaskList(updatedTasks);
      setEditId(0);
      return;
    }
  }

  // deleting Todo .
  const deleteTodo = (index) => {
    var newList = taskList;
    newList.splice(index, 1);
    setTaskList([...newList]);
  }

  // Editing Task
  const handleEdit = (index) => {
    const editTask = taskList.find((i) => i.index === index);
    setTask(editTask.task);
    setEditId(index);
  }

  return (
    <div className="App">
      <h1 className='title'> Todo App </h1>
      <input type='text' value={task} onChange={(e) => { setTask(e.target.value) }} />
      <button onClick={AddTask}> Add </button>

      {taskList.map((task) => {
        return <CustomTask task={task.task} deleteTodo={deleteTodo} index={task.index} handleEdit={handleEdit} />
      })}

    </div>
  );
}
