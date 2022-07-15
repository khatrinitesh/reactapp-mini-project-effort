import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Animated/>
    </div>
  )
}

const HEIGHT_LIMIT = 100
    
function Animated(){
    const divRef = React.useRef()
    const requestRef = React.useRef()
    const heightRef = React.useRef(0)

    const animate = () => {
        heightRef.current += 1
        divRef.current.style.height = `${heightRef.current}px`
        if(heightRef.current < HEIGHT_LIMIT){
            requestRef.current = requestAnimationFrame(animate)
        }
    }

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current)
    },[])

    return <div ref={divRef} style={{backgroundColor:"#000"}}/>
}