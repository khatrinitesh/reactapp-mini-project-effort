import React from 'react';
import {ListGroup}  from "react-bootstrap";

export default function CustomApp() {
    const items = [
        { title: "item-1" },
        { title: "item-2" },
        { title: "item-3" }
    ]
  return (
    <>
        <Sidebar items={items}/>
        <Card title='nitesh' body='lorem ipsum'/>
    </>
  )
}


function Card(props){
    const {title,body} = props;
    return(
        <div className='card_container'>
            <h2>{title}</h2>
            <div>{body}</div>
        </div>
    )
}


function Sidebar(props){
    const {items} = props;
    return(
        <div className="sidebar">
            <div className="sidebar-items">
                {items.map(({title}, index) => (
                <ListGroup key={index} title={title}/>
                ))}
            </div>
        </div>
    )
}
