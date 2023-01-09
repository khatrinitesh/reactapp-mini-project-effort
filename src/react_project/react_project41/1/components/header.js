import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [scrolled,setScrolled]= useState(false);

  const handleScroll=() => {
    const offset = window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })


  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }


  return (
    <header className={x.join(" ")}>
      <ul>
        <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>

        <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
            <NavLink to="/service" activeClassName="active">Service</NavLink>
        </li>

        <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}
