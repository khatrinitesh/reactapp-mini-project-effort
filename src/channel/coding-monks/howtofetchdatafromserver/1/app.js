import React,{useState,useEffect} from 'react';

export default function CustomApp() {


    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/gagandatt')
        .then((response) => {
            return response.json();
        })
        .then((data)=> {
            console.log(data);
            setData(data);
        })
    },[])
  return (
    <div>
        {data.map((val,index) => {
                return(
                    <div key={index}>
                        <h3>{val.avatar_url}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}
