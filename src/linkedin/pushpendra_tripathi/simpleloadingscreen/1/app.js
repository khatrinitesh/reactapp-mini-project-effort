import React,{useState,useEffect} from 'react';
import ReactLoading from 'react-loading';

export default function CustomApp() {

    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        },1000)
    },[])
  return (
    <>
    {loading ? (<ReactLoading type='spokes' color='#000fff' height={'20%'} width={50}/>) : (<p>Lorem ipsum is simply dummy</p>)
    }
    </>
  )
}
