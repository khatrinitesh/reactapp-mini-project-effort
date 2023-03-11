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


    const myStyle = {
        color:'blues',
        fontSize:'10px'
    }

    

    const handleClick= () => {
        const data = 'nitesh '
        {data.length > 0 && alert('this alert will be shown!')}
    }

    const todoList = ['write article', 'read article', 'Review article'];
    const totalTask = todoList.length;


    const friendlist = ['vijay','ashish','mayur','ronak']
    const totalfriend = friendlist.length;

    
  return (
    
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem ipsum"/>
        <div className="container text-center mt-3">
            <h1 style={{color:'red'}}>Shopping Cart</h1>
            <h5 style={myStyle}>Total: ${total.toFixed(12)}</h5>
            <button className="btn btn-primary mt-3">Checkout</button>
           
            <button onClick={handleClick}>HandleCLick</button>
            <CustomHome isLogged={true}/>

            <b>
            {
                totalTask > 0 ? (<h2>The user has total {totalTask} task pending</h2>) : (<h2>The user has not any task pending</h2>) 
            }
            </b>    

            <p>
                {totalfriend > 0 ? (<h1>Friend has total {totalfriend} friend pending</h1>) : (<h1>has not any friend pending</h1>)}
            </p>
        </div>
    </div>
  )
}


function CustomHome(props){
    let {isLogged} = props
    if(isLogged){
        return <h1>nitesh khatri</h1>
    }
    else{
        return <h1>sameet khatri</h1>
    }
}