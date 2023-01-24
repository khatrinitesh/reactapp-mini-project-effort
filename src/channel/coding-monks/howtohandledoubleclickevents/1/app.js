import React from 'react'

export default function CustomApp() {

    const clickBtn = (e) => {
        console.log(e)
        switch(e.detail){
            case 1:{
                console.log('single');
                break;
            }
            case 2:{
                console.log('single');
                break;
            }
            case 3:{
                console.log('single');
                break;
            }
            default:{
                break;
            }
        }

        if(e.detail == 2){
            console.log('double')
        }
    }
  return (
    <div>
        <button onClick={clickBtn}>Click</button>
        <input type='text'/>
    </div>
  )
}
