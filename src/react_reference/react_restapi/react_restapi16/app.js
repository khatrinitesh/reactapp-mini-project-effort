import React,{useEffect, useState} from 'react'
import { Controller } from 'react-hook-form'

export default function CustomApp() {

    const [loading,setLoading] = useState(true)
    const [data,setData] = useState()
    const [error,SetError] = useState()

    useEffect(() => {

        const controller = new AbortController()
        setLoading(true)
        fetch(url,{signal:controller.signal}).then(setData).catch(SetError).finally(() => setLoading(false));

        return () => {
            controller.abort()
        }
    },[url])
  return {loading,error,data}
}
