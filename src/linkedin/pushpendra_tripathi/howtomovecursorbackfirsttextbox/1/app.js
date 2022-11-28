import React from 'react'

export default function CustomApp() {

    const moveCursorAtFirst = () => {
        document.getElementsByTagName('input')[0].focus();
    }
  return (
    <div>
        <input type="text" placeholder='one'/>
        <br/>
        <input type="text" placeholder='two'/>
        <br/>
        <input type="text" placeholder='three'/>
        <br/>
        <button onClick={moveCursorAtFirst}>ClickButton</button>
    </div>
  )
}


