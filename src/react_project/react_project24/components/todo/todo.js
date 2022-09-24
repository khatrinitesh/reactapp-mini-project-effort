import React,{useState} from 'react';
import CustomList from './list';

export default function CustomTodo() {

    const [todo,setTodo] = useState('')
    const [add,setAdd] = useState([])
    const [validation,setValidation] = useState('')

    const setData = (e) => {
        setTodo(e.target.value)
    }

    const btnAdd = () => {
        if(todo == ''){
            setValidation('write your todo')
        }
        else{
            setAdd(() => {
                return [...add,todo]
            })
            setTodo('')
            setValidation('')
        }
    }

    const delItem = (id) => {
        const finalData = add.filter((el,ind) => {
            return ind != id
        })
        setAdd(finalData)
    }


  return (
    <div>
        {validation}
        <input type="text" onChange={setData} value={todo}/>
        <button onClick={btnAdd}>+</button>
        <div>
            {add.map((val,ind) => {
                return(
                    <CustomList id={ind} text={val} delItem={delItem}/>
                )
            })}
        </div>
    </div>
  )
}
