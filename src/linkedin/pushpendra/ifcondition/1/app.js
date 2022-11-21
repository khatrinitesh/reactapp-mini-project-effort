import React from 'react';


export default function CustomApp() {
    const isPrint = true
    const print = () => {
        if(isPrint){
            return <div>Nitesh Khatri</div>
        }
        else{
            return <div>Sameet Khatri</div>
        }
    }
  return (
    <div>
        {print()}
        {/* {isPrint ? "nitesh" : "sameet"} */}
    </div>
  )
}


