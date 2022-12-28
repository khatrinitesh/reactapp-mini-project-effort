import React,{useState} from 'react';
import './custom.css';
import {movies} from './movies';

export default function CustomApp() {
  return (
    <div>
        <div className="page">
            <div className="layout">
                <main className="container">
                    <Card/>
                </main>
            </div>
        </div>
    </div>
  )
}

function Card() {

    const [data,setData] = useState(movies)

    const btnDel = (id) => {
        const newData = data.filter((item) => item.id !== id)
        setData(newData)
    }
    return (
      <div className="card">
        <div className="info">
            {data.map((item) => {
                return(
                    <div>
                        <h2>{item.title}</h2>
                        <h4>{item.subtitle}</h4>
                        <p>{item.description}</p>
                        <button onClick={() => btnDel(item.id)}>&times;</button>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }