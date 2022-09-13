import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import List from './list';

export default function CustomToDo() {
    const [todo,setTodo] = useState('')
    const [add,setAdd] = useState([])
    const [validation,setValidation] = useState('')


    const setData = (e) => {
        setTodo(e.target.value)
    }

    const additeams = () => {
        if(todo == ''){
            setValidation('Enter your todo')
        }
        else{
            setAdd(() => {
                return [...add,todo]
            })
            setTodo('')
            setValidation('')
        }
    }

    const deleteBtn = (id) => {
        const finalData = add.filter((el,ind) => {
            return ind !== id
        })
        setAdd(finalData)
    }


  return (
    <div className='main_container'>
        {validation}
        <input type="text" value={todo} onChange={setData} placeholder="write your todo"/>
            <Tooltip title="Add">
                <Button className='addbtn' onClick={additeams}>
                     <AddIcon/>
                </Button>
            </Tooltip>
        <div className='store_container'>
            <ul>
                {add.map((el,ind)=>{
                    return(
                        <List id={ind} text={el} deleteBtn={deleteBtn}/>
                    )
                })}    
            </ul>
        </div>
    </div>
  )
}
