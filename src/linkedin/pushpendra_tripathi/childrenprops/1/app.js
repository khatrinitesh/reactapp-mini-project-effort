import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Title title="technical tips">Nitesh khatri</Title>
      <hr/>
      <Student>This is Student</Student>
      <Card>
       <button>hey</button>
       <button>hello</button>
      </Card>
      <hr/>
      <Card>
        <p>Lorem Ipsum</p>
      </Card>
    </div>
  )
}

const Student = (props:any) => {
    return(
        <>
         {props.children}
        </>
    )
}

const Card = (props:any) => {
    return(
        <>
         {props.children}
        </>
    )
}

const Title = (props:any) => {
    return(
        <>
         {props.children} - {props.title}
        </>
    )
}