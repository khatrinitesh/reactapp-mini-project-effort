import React,{useEffect,useState} from 'react';


export default function CustomExample() {
  return (
    <div>
         <History />
    </div>
  )
}


const History = () => {

    const [data,setData] = useState([
        {
            data: 1,
            id: 'box-1',
            sasactive: false,
            color:'red'
        },
        {
            data: 2,
            id: 'box-2',
            sasactive: false,
            color: 'green'
        },
        {
            data: 3,
            id: 'box-3',
            sasactive: false,
            color: 'yellow'
        },
        {
            data: 4,
            id: 'box-4',
            sasactive: false,
            color: 'blue'
        }
    ])

    const onPop=(e)=>{
        let arr = [...data]
        arr.forEach(item=>{
            if(item.id === e.state)
                item.sasactive = true
            else
                item.sasactive = false
        })

        setData(arr)
    }

    useEffect(()=>{
        window.addEventListener('popstate',onPop);
        return () => window.removeEventListener("popstate", onPop);
    },[onPop])

    const handlePushState=(item)=>{
        window.history.pushState(`${item.id}`,"Select bnt-"+item.data,`selected=${item.id}`)
    }

  return (
    <div className='history-text'>
        {
            data.map((item,index)=>{
                return(
                <div onClick={()=>handlePushState(item)} className={item.sasactive ? 'sasactive' : 'square' } 
                id={item.id} key={index} style={{backgroundColor: item?.color}}>
                    {item.data}
                </div>
                )
            })
        }
    </div>
  )
}
