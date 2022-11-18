import React, { useEffect, useState } from "react";

export default function FetchApi() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const url = 'https://hn.algolia.com/api/v1/search?query=react';

    useEffect(() => {

        const fetchData = async () => {
          setIsLoading(true);
          const res = await fetch(url)
          const json = await res.json()
          setData(json.hits);
          console.log(setData(json.hits))
          setIsLoading(false)
        };    
        fetchData();
    },[setData]);


    const btnDel = (objectID) => {
        const finalData = data.filter((item) => item.objectID !== objectID)
        setData(finalData)
        console.log(setData(finalData))
    }



    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
  return (
    <div>
      {data.map((item) => {
        return(
            <div key={item.objectID}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <button onClick={() => btnDel(item.objectID)}>Remove</button>
            </div>
        )
      })}
    </div>
  )
}
