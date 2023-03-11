import React from 'react';
import Banner from '../components/banner';

const shoppingCart = [
    {
      id: 1,
      product: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      qty: 1,
      price: 109.95,
    },
    {
      id: 2,
      product: 'Mens Casual Premium Slim Fit T-Shirts ',
      qty: 1,
      price: 22.3,
    },
    {
      id: 3,
      product: 'Mens Cotton Jacket',
      qty: 2,
      price: 55.99,
    },
    {
      id: 4,
      product: 'Mens Casual Slim Fit',
      qty: 1,
      price: 15.99,
    },
  ];

export default function Home() {

    let total = shoppingCart.reduce((prevValue,currentValue) => {
        return prevValue + currentValue.qty * currentValue.price
    },0)
  return (
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem ipsum"/>
        <div className="container text-center mt-3">
            <h1>Shopping Cart</h1>
            <h5>Total: ${total.toFixed(12)}</h5>
            <button className="btn btn-primary mt-3">Checkout</button>
        </div>
    </div>
  )
}
