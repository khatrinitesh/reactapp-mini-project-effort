import React from 'react'

export default function ConditionalOne() {

    const Emp1 = ['a','b','c']
    const Emp2 = ['d','e','f']

    const totalEmp = [...Emp1,...Emp2]
  return (
    <div>
        {totalEmp.map((val) => {
            return(
                <h1>{val}</h1>
            )
        })}
    </div>
  )
}
