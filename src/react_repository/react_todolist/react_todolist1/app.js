import React from 'react';
import Header from './header';
import ToDoList from './todolist';
import './custom.css';

export default function CustomApp() {
  return (
    <div className='app'>
        <div className='content'>
            <Header/>
            <ToDoList/>
        </div>
    </div>
  )
}

