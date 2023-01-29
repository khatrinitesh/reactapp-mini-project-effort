import React,{useState} from 'react';
import { BsFacebook } from 'react-icons/bs';

export default function IconBar() {

    const isActive = useState(true);
  return (
    <>
        <ul className='list-unstyled d-flex'>
            <li>
                <a href="https://www.google.com/" target="_blank" style={{color:isActive ? 'white' : 'green',background:isActive ? 'red' : 'green'}}>
                    <BsFacebook/>
                </a>
            </li>
            <li>
                <a href="/" target="_blank">
                    <BsFacebook/>
                </a>
            </li>
            <li>
                <a href="/" target="_blank">
                    <BsFacebook/>
                </a>
            </li>
            <li>
                <a href="/" target="_blank">
                    <BsFacebook/>
                </a>
            </li>
        </ul>
    </>
  )
}
