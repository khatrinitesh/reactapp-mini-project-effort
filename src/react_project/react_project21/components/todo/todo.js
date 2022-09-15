import React,{useState} from 'react';
import CustomList from './list';

export default function CustomToDo() {

    const [todo,setTodo] = useState('')
    const [add,setAdd] = useState([])
    const [validation,setValidation] = useState('')

    const setData = (e) => {
        setTodo(e.target.value)
    }

    const btnAddItems = () => {
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

    const deleteItem = (id) => {
        const finalData = add.filter((el,ind) => {
            return ind !== id
        })
        setAdd(finalData)
    }

  return (
    <div>
        {validation}
        <input type="text" placeholder="write your todo" onChange={setData} value={todo}/>
        <button onClick={btnAddItems}>+</button>
        <div className='box'>
            <ul>
                {add.map((el,ind) => {
                    return(
                        <>
                        <CustomList id={ind} text={el} deleteItem={deleteItem}/>
                        </>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
