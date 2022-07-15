import React,{useEffect} from 'react'

export default function CustomApp() {

    const a  = {test:1}


    useEffect(() => {

    },[a])
  return (
    <div>{a}</div>
  )
}


