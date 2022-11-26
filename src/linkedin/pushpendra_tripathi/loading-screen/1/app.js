import React,{useState,useEffect} from 'react';


export default function CustomApp() {
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        },1000)
    },[])
    
  return (
    <div>
        {loader && (
            <img src='https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif'/>
        )}
        {!loader && (
            <>Consequat minim ex dolore ut sunt ullamco mollit dolor eiusmod.</>
        )}
    </div>
  )
}

