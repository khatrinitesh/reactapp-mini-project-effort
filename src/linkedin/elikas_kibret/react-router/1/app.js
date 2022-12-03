import React from 'react';
import { NavLink } from "react-router-dom";
import { HiHome,HiArchive } from "react-icons/hi";
// import { IconName } from "react-icons/fc";

const navList = [
    {
        id:1,
        text:'Home',
        path:'/',
        icon:<HiHome/>
    },
    {
        id:1,
        text:'Home',
        path:'about',
        icon:<HiArchive/>
    },
]

const CustomApp = () => {
    return(
        <div>
            {navList.map((list) => {
                const {id,text,icon,path} = list 
                const Icon = icon 
                return  <NavLink to={path} key={id} className={({isActive}) => isActive ? 'isactivelink' : 'link'}>
                            <Icon/> {text}
                        </NavLink>
                
            })
            }
        </div>
    )
}


export default CustomApp