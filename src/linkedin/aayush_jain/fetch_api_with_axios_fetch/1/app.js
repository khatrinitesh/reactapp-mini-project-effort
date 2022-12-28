import React, {useState, useEffect } from 'react';
import axios from 'axios';

export default function CustomApp() {
  return (
    <div>
        <CustomFetchData/>
    </div>
  )
}

const CustomFetchData = () => {

    const [users,setFetch] = useState([])
    const givenURL = 'https://jsonplaceholder.typicode.com/posts'

    const getDataWithFetch = () => {
        fetch(givenURL)
        .then((res) => res.json())
        .then((data) => {
            setFetch(data)
        })
    }

    const getDataWithAxios = async () => {
        const res = await axios.get(givenURL)
        setFetch(res.data)
    }

    useEffect(() => {
        getDataWithFetch();
        // getDataWithAxios();
    },[])

    const btnDel = (index) => {
        // const newFinalData = users.splice(id,1)
        // setFetch(newFinalData)
        setFetch((users) => users.filter((_, index) => index !== 0));
      
    }

    return(
        <>
         <h1>Data:</h1>
            {users.map((item) => {
                return(
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <button onClick={() => btnDel(item.id)}>&times;</button>
                    </div>
                )
            })}
        </>
    )
}

const initialState = () => [
    { id: 1, name: 'Banana', amount: 5 },
    { id: 2, name: 'Apple', amount: 6 },
]

const CustomExampleArray = () => {
    const [fruits,setFruits] = useState(initialState);

    const removeSecond= () => {
        setFruits((current) => {
            current.filter((fruit) => fruit.id !== 2)
        })
    }

    return(
        <div style={{margin:'16px'}}>
            <button onClick={removeSecond}>&times;</button>
            {fruits.map((fruit) => {
                return(
                    <div key={fruit.id}>
                        <h3>Name: {fruit.name}</h3>
                        <h3>Amount: {fruit.amount}</h3>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}