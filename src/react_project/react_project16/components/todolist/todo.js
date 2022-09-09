import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import CustomList from './list';

export default function CustomToDo() {
    const [todo,setTodo] = useState('');
    const [add,setAdd] = useState([])
    const [validation,setValidation] = useState('')

    const setData = (e) => {
        setTodo(e.target.value)
    }

   const addItems = () => {
    if(todo == ''){
        setValidation('enter your todo')
    }
    else{
        setAdd(() => {
            return [...add,todo]
        });
        setTodo('')
        setValidation('')
    }
   }

    const dltitems = (id) => {
        const finalDelData = add.filter((el,ind) => {
            return ind !== id
        })
        setAdd(finalDelData)
    }
  return (
    <>
     <div className='main-container'>
        <div className="todo-box">
            <img src='https://png.pngtree.com/png-clipart/20190117/ourmid/pngtree-hand-painted-teachers-day-a-stack-of-books-book-png-image_432486.jpg' className='img-fluid' alt='Book'/>
            <h2 className='heading'>Write your todo list</h2>
            <h3 className='validation'>{validation}</h3>
            <div className='input-container'>
                <input type="text" onChange={setData} value={todo} placeholder="Enter Your Task" id=""/>
                <Tooltip title="add">
                    <Button className="addbtn" onClick={addItems}>
                        <AddIcon/>
                    </Button>
                </Tooltip>
            </div>
            <div className="store-container">
                <ul>
                    {
                        add.map((els,index) => {
                            return(
                                <CustomList id={index} text={els} dltitems={dltitems} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
     </div>
    </>
  )
}
