import React from 'react';
import CustomList from './list';

export default function CustomTodo() {


    const [todo,setTodo] = useState([])
    const [add,setAdd] = useState('')
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
  return (
    <div>
        {validation}
        <input type='text' value={id} onChange={setData}/>
        <button onClick={btnAdd}>+</button>

        {add.map((val,end) => {
            return(
                <CustomList key={end} text={val} btnDel={btnDel}/>
            )
        })}

    </div>
  )
}
