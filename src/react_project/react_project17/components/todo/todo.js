import React, { useState } from 'react'
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
        if(todo == ""){
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

    const dltitems = (id) => {
        const finalData = add.filter((el,ind) => {
            return ind !== id
        });
        setAdd(finalData)
    }
  return (
    <div className='main-container'>
        <h2 className='heading'>Write Your Todo List Here</h2>
        <h3 className='validation'>{validation}</h3>
        <div className='input-container'>
            <input type='text' value={todo} onChange={setData} placeholder="Enter Your Task" id=""/>
            <Tooltip title="Add">
                <Button className='addbtn' onClick={additeams}>
                    <AddIcon />
                </Button>
            </Tooltip>
        </div>
        <div className='store-container'>
            <ul>
                {add.map((ele,index) => {
                    return(
                        <>
                        <List id={index} text={ele} dltitems={dltitems}/>
                        </>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
