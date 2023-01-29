import React,{useState} from 'react';
import { Spin as Hamburger } from 'hamburger-react'

export default function MenuHamburger() {

    const [isOpen, setOpen] = useState(false)

  return (
    <div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && <Sidebar/>}
    </div>
  )
}


function Sidebar(){

    const [isActive,setIsActive] = useState(false);
    return(
        <>
        <div className={isActive ? 'sidebar' : 'sidebar_active'}>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
        </div>
        </>
    )
}