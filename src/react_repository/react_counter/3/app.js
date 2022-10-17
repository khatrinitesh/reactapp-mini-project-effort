import React,{useState,useEffect} from 'react'

export default function CustomApp() {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [data,setData] = useState('')
    // const [fullName,setFullName] = useState('')

    const fullName = `${firstName} ${lastName}`

    function fieldFirst(e) {
        setFirstName(e.target.value)
    }
    function fieldLast(e){
        setLastName(e.target.value)
    }

    useEffect(() => {
        fetch("#").then(d => {
            setData(d)
            console.log(d)
        })
    },[])

    // useEffect(() => {
    //     console.log(data)
    // },[data])
  return (
    <div>
        <input type='text' value={firstName} onChange={fieldFirst}/>
        <hr/>
        {fullName}
    </div>
  )
}
