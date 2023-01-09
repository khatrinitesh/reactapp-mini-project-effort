import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CustomApp() {

    const notify = () => toast("Wow so easy!");
  return (
    <div>
      <a style={{backgroundColor:'lightblue',padding:'12px',color:'blue'}} onClick={notify}>Notify!</a>
      <ToastContainer/>
    </div>
  )
}
