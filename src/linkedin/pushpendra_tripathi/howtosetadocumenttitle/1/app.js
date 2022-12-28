import React,{useEffect} from 'react';

export default function CustomApp() {


    useEffect(() => {
        document.title = 'nitesh khatri'
    })
  return (
    <div>
        <h1>React App is Nitesh Khatri</h1>
    </div>
  )
}
