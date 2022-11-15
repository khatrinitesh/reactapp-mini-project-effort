import React,{useState} from 'react'



export default function CustomApp() {

    const [showPage,setShowPage] = useState(false);

    const showPageEvent2 = () => {
        setShowPage(!showPage)
    }
  return (
    <div>
        <button className={showPage && 'btn btn-success'} onClick={showPageEvent2}>Show me</button>
    </div>
  )
}
