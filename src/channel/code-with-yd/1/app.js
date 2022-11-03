import React from 'react';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './globalcomponents/themeprovider';
import { Router } from "@reach/router";
import Header from './components/header';


//Pages
import Home from './pages/home';
import Cart from './pages/cart';
import ProductDetails from "./pages/productdetail";

export default function CustomApp() {

    const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
    <Header/>
    <Router>
      <Home path="/" />
      <ProductDetails path="product-details/:productId"/>
      <Cart path="/cart" />
    </Router>
  </main>
  )
}
