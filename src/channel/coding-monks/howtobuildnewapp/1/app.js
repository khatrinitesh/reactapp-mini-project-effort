import React, {useState, useEffect } from 'react';
import axios from 'axios';

export default function CustomApp() {

    const [news,setNews]  = useState([])


    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=abf3401335b642099a39be1c3c6ebc58')
        .then((res) => {
            console.log(res.data.articles)
            setNews(res.data.articles)
        })
    })


    const btnDel = value => {
      setNews(oldValues => {
        return oldValues.filter(fruit => fruit !== value)
      })
    }
  return (
    <div className="row">
        {
          news.map((item,index) => {
            return(
              <div className='card col-md-3'>
                <div key={item.source.id} className="card-body">
                  <img src={item.urlToImage} alt={item.source.name} className='img-fluid'/>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                  <button onClick={() => btnDel(index)}>Remove</button>
                </div>
              </div>
            )
          })
        }       
      </div>
  )
}
