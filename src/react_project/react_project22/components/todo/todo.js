import React,{useState} from 'react';
import { idText } from 'typescript';
import CustomList from './list';

export default function CustomToDo() {

    const [todo,setTodo] = useState('')
    const [add,setAdd] = useState([])
    const [validation,setValidation] = useState('')

    const setData = (e) => {
        setTodo(e.target.value)
    }

    const btnAdd = () => {
        if(todo == ''){
            setValidation('enter your todo')
        }
        else{
            setAdd(() => {
                return [...add,todo]
            })
            setTodo('')
            setValidation('')
        }
    }

    const delItem= (id) => {
        const finalData = add.filter((el,ind) => {
            return ind !== id
        })
        setAdd(finalData)
        console.log(setAdd(finalData))
    }


  return (
    <div>
        {validation}
        <input type="text" value={todo} onChange={setData}/>
        <button onClick={btnAdd}>+</button>
        {add.map((value,ind) => {
            return(
                <>
                    <CustomList id={ind} text={value} delItem={delItem}/>
                </>
            )
        })}
    </div>
  )
}
