import React,{useState} from 'react'

export default function CustomApp() {
    const Arr1 = [
        {
            id:1,
            title:'nitesh khatri',
            body:'lorem ipsum'
        }
    ]

    const Arr2 = [
        {
            id:2,
            title:'sameet khatri',
            body:'lorem ipsum'
        }
    ]

    const Arr3 = [
        {
            id:3,
            title:'arvind khatri',
            body:'lorem ipsum'
        }
    ]

    const children = Arr1.concat(Arr2,Arr3);
    console.log(children);

    const [dataList,setDataList] = useState(children)

    const btnDel = (id) => {
        const finalData = dataList.filter((obj) => obj.id != id)
        setDataList(finalData)
    }
  return (
    <div>
        {dataList.map((user) => {
            return(
                <div key={user.id}>
                    <h3>
                        {user.id} {user.title}
                    </h3>
                    <p>{user.body}</p>
                    <hr/>
                    <button onClick={() => btnDel(user.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
