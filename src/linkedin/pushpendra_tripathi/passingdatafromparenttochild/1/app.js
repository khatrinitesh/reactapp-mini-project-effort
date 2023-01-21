import React from 'react';

export default function CustomApp() {
  return (
    <div>
        <Parent/>
    </div>
  )
}

const Parent = () => {
    const data = 'hello - nitesh khatri'

    return (
        <>
            <Child data={data}/>
        </>
    )
}

const Child = (props) => {
    return(
        <>
            <h2>{props.data}</h2>
        </>
    )
}
