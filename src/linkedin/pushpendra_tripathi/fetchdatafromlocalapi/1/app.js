import React from 'react'

export default function CustomApp() {

    const details = [
        {
            "id":1,
            "name":'nitesh khatri',
            "age":33,
            "companyname":"assurekit"
        },
        {
            "id":2,
            "name":'arvind khatri',
            "age":67,
            "companyname":"assurekit"
        },
        {
            "id":3,
            "name":'urvashi khatri',
            "age":64,
            "companyname":"assurekit"
        },
    ]

    const [employees, setEmployees] = React.useState(details);


    const btnRemove = (id) => {
        setEmployees(current =>  current.filter(emp => {
                return emp.id !== id
            })
        );
      };
  return (
    <div>
        {employees.map((detail) => {
            return(
                <div key={detail.id}>
                    <h3>{detail.name}</h3>
                    <p>{detail.age}</p>
                    <p>{detail.companyname}</p>
                    <button onClick={() => btnRemove(detail.id)}>&times;</button>
                </div>
            )
        })}
    </div>
  )
}
