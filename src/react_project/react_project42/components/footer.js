import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

   
  return (
    <footer>
        <p>&copy; Copyright {new Date().getFullYear()}</p>
    </footer>
  )
}
