import React,{useState,useEffect} from 'react'

export default function CustomApp() {

    const [first,setFirst] = useState('')
    const [two,setLast] = useState('')
    const [third,setThird] = useState('')

    useEffect(() => {
        setTimeout(() => {
            console.log('One')
            setFirst('One')
        },1000)
    });

    setTimeout(() => {
        console.log('Two')
        setLast('Two')
    },3000)

    setTimeout(() => {
        console.log('Third')
        setThird('Third')
    },6000)
  return (
    <div>
        {first}
        <br/>
        {two}
        <br/>
        {third}
    </div>
  )
}
