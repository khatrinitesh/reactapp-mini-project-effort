import React,{useState,useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";

// const API = "";

export default function CreateDetail() {

    const {id} = useParams();
    

    
  return (
    <div className='content'>
        Create Detail {id}
    </div>
  )
}
