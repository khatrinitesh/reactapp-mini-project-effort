import React from "react";
import useFetchApi from './usefetch';

export default function CustomApp() {

    const {data,loading,error} = useFetchApi(
        'https://jsonplaceholder.typicode.com/users'
    )
    console.log(data)

    if(error) return <p>Error!</p>
    if(loading) return <p>Loading...</p>
  return (
    <div>
        <ul>
            {data.map(function (item) {
                return(
                    <li>{item.name}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
