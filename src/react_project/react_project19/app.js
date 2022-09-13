import React from 'react';
import Hero from './hero';
import FullCard from './fullcard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function CustomApp() {

    const data = [
        {
            title:'HTML',
            description:'Tempor mollit consequat ut id do reprehenderit excepteur velit consectetur adipisicing est excepteur eiusmod.'
        },
        {
            title:'CSS',
            description:'Tempor mollit consequat ut id do reprehenderit excepteur velit consectetur adipisicing est excepteur eiusmod.'
        },
        {
            title:'JS',
            description:'Tempor mollit consequat ut id do reprehenderit excepteur velit consectetur adipisicing est excepteur eiusmod.'
        }
    ]
  return (
    <>
     <Router>
        <Routes>
            <Route path="/" element={<Hero data={data}/>}/>
            <Route path="/cards/:title" element={<FullCard data={data}/>}/>
        </Routes>
     </Router>
    </>
  )
}
