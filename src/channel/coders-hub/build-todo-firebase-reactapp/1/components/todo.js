import React,{useState} from 'react';
import {db} from '../firebaseConfig';
import {addDoc,collection} from 'firebase/firestore';

export default function CustomToDo() {

    const [title,setTitle] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(title != ''){
            await addDoc(collection(db,'todos'),{
                title,
                completed:false
            })
            setTitle("")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type={'text'} placeholder="Enter todo task" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button>+</button>
        </form>
    </div>
  )
}
