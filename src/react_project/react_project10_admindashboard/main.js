import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// BELOW IMPORT FOR COMPONENTS
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

// BELOW IMPORT FOR PAGES
import Home from './pages/home';
import NewProduct from './pages/newproduct';
import NewUser from './pages/newuser';
import Product from './pages/product';
import ProductList from './pages/productlist';
import User from './pages/user';
import UserList from './pages/userlist';

export default function Main() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/newProduct" element={<NewProduct/>}/>
        </Routes>
      </div>
    </Router>
  )
}
