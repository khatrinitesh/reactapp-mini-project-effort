import React from 'react'
import {db} from './firebaseConfig';
import {addDoc,collection} from 'firebase/firestore';
import CustomToDo from './components/todo';

export default function CustomApp() {
  return (
    <div>
        <CustomToDo/>
    </div>
  )
}
