import React,{useState,useEffect} from 'react'

export default function CustomApp() {
  return (
    <>
        <One/>
    </>
  )
}


function One(){
    const [showText,setShowText] = useState(false);

    const handleToggleText= () => {
        setShowText(!showText)
    }

    const handleInputChange = (e) => {
        setShowText(e.target.value)
    }

    useEffect(() => {
        console.log('COMPONENT MOUNTED')

        return () => {
            console.log('COMPONENT UNMOUNTED')
        }
    },[showText])
    return(
        <>
        <button className={showText ? 'btn btn-primary' : 'btn btn-success'} onClick=
        {handleToggleText}>{showText ? 'sameet' : 'nitesh'}</button>
        <br/>
        <input type="text" value={showText} onChange={handleInputChange}/>
        <br/>
        {showText || <Text/> }
        {/* <button disabled={!showText}>Button</button> */}
        </>
    )
}
function Text(){
    return(
        <>Nitesh khatri</>
    )
}