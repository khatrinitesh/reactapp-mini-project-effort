import React,{useLayoutEffect} from 'react';

export default function CustomApp() {

    useLayoutEffect(() => {
        console.log('hello')
    },[])


  return (
    <div>Hello</div>
  )
}
