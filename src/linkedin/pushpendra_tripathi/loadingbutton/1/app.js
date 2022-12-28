import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <CustomLoading/>
    </div>
  )
}


function CustomLoading(){
    const [loading,setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        },3000);
    }

    return(
        <>
         <button onClick={handleClick} disabled={loading}>
            {loading && <span>Loading data from server</span>}
            {!loading && <span>fetch data from server</span>}
         </button>
        </>
    )
}