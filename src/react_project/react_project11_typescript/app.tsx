import React,{ useEffect, useState } from 'react';
import Header from './components/header';
import ListNotes from './components/listnote';
import { Note } from './models/note.model';

export default function CustomApp(){
    const [notes,setNotes] = useState<Note[]>([])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => setNotes(data))
        .catch(err => console.log(err))
    },[])

    return(
        <> 
         <Header/>
         <div className='container'>
            <ListNotes notes={notes} setNotes={setNotes}/>
         </div>
        </>
    )
}