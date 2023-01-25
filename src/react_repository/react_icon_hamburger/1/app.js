import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './custom.css';

export default function CustomApp() {
  return (
    <div>
        <Menu>
        <a className="menu-item" href="/">
            Home
        </a>
        <a className="menu-item" href="/salads">
            Salads
        </a>
        <a className="menu-item" href="/pizzas">
            Pizzas
        </a>
        <a className="menu-item" href="/desserts">
            Desserts
        </a>
        </Menu>
    </div>
  )
}
