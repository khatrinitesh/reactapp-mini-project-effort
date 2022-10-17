import React from 'react'

export default function CustomApp() {

    const list = ['Apples','Vegetables','Milk','Rice','Bread','ABC']

    list.map((ele,index) => {
        console.log(index + " " + ele)
    })
  return (
    <div>
        {list.map((element,index) => {
            if(index % 2 == 0){
                return (
                    <div className='mydiv' key={index}>Odd: {element}</div>
                )
            }
            else{
                return null
            }
        })}
    </div>
  )
}
