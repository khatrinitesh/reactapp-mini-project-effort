import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Point/>
    </div>
  )
}

function Point() {
    const mousePosition = useMousePosition()
    const requestRef = React.useRef()
    const pointRef = React.useRef()
  
    const animate = () => {
      pointRef.current.style.left = `${mousePosition.current.x}px`
      pointRef.current.style.top = `${mousePosition.current.y}px`
      requestRef.current = requestAnimationFrame(animate)
    }
    React.useEffect(() => {
      requestRef.current = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(requestRef.current)
    }, [])
  
    return (
      <div
        ref={pointRef}
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#000",
          transform: "translate(-50%, -50%)"
        }}
      />
    )
  }

function useMousePosition(){
    const mousePosition = React.useRef({x:0,y:0})
    React.useEffect(() => {      
        const updateMousePosition = (ev) => {
            mousePosition.current = {
                x:ev.clientX,
                y:ev.clientY,
            }
        }
        window.addEventListener('mousemove',updateMousePosition)
        return () => window.removeEventListener('mosemove',updateMousePosition)
    },[])

    return mousePosition
}

