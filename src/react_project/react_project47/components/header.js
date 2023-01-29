import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import classnames from "classnames";

export default function Header() {

    const [yOffset, setYOffset] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  
    function handleScroll() {
      const currentYOffset = window.pageYOffset;
      const visible = yOffset > currentYOffset;
      setYOffset(currentYOffset);
      setVisible(visible);
    }
  return (
    <header className={classnames("navbar", {
        "navbar--hidden": !visible
      })}>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="about">About</NavLink>
            </li>
            <li>
                <NavLink to="service">Service</NavLink>
            </li>
            <li>
                <NavLink to="contact">Contact</NavLink>
            </li>
        </ul>
    </header>
  )
}
