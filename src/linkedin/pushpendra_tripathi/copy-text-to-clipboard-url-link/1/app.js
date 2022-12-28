import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <FaceText/>
    </div>
  )
}

const FaceText = () => {
    var copyText1;

    const CopyText = () => {
        copyText1 = document.getElementById('txt');
        copyText1.select();
        copyText1.setSelectionRange(0,9999);
        navigator.clipboard.writeText(copyText1.value);
    }
    
    return(
        <>
         <input type='text' id='txt'/>
         <button onClick={CopyText} value={copyText1}>Copy</button>
        </>
    )
}
