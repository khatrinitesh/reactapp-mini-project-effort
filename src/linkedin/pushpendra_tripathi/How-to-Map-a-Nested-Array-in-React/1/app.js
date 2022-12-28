import React,{useState} from 'react'

export default function CustomApp() {

    const details = [
        {
            message:'success',
            people:[
                {
                    id:1,name:'nitesh',age:33,address:'india'
                },
                {
                    id:2,name:'sameet',age:40,address:'usa'
                },
                {
                    id:3,name:'mom',age:64,address:'india'
                },
                {
                    id:4,name:'daddy',age:67,address:'india'
                },
            ],
            "thumbnailer":"https://aupairone.com/images/placeholder-family.gif"
        }
    ]

    const [dataList,setDataList] = useState(details);

    // const btnDel  = (id) => {
    //     const newData = dataList.filter((obj) => obj.id != id)
    //     console.log(setDataList(newData))
    // }
  return (
    <div>
        {dataList.map((obj) => {
            return(
                <div>
                    <h1>{obj.message}</h1>
                    <img src={obj.thumbnailer}/>
                    {obj.people.map((user) => {
                        return(
                            <div key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.address}</p>
                            {/* <button onClick={() => btnDel(user.id)}>Remove</button> */}
                        </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}
