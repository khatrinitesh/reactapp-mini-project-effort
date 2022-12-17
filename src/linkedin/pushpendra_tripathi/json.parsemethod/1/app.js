import { LocalActivity } from '@material-ui/icons';
import React from 'react';

export default function CustomApp() {

    const text = '{"name":"nitesh","age":33}'

  //   const sData = [
  //     {
  //         name:'nitesh',
  //         age:33
  //     },
  //     {
  //         name:'urvashi',
  //         age:64
  //     },
  //     {
  //         name:'arvind',
  //         age:67
  //     },
  // ]

  // localStorage.setItem('example',JSON.stringify(sData));
  // var fullData = JSON.parse(localStorage.getItem('example'));
  return (
    <>
     {JSON.parse(text).name} - {JSON.parse(text).age}
     {/* {fullData.map((val) => {
      return(
        <div>
          {val.name} - {val.age}
        </div>
      )
     })} */}
    </>
  )
}


