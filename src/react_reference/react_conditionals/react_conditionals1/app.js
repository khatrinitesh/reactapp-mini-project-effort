import React,{useState} from 'react';
import List from './list';

export default function CustomApp() {
  return (
    <div>
        <Menu/>
    </div>
  )
}

const MenuItem = ({menu}) => {
    switch(menu){
        case 1 : return <Users/>
        case 2 : return <Chats />
        case 3 : return <Rooms/>
        default: return null

    }
}

function Menu(){
    const [menu,setMenu] = useState(1)
    const toggleMenu = () => {
        setMenu((m) => {
          if (m === 3) return 1
          return m + 1
        })
      }

    return(
        <>
        <MenuItem menu={menu}/>
        <button onClick={toggleMenu}>Toggle menu</button>
        </>
    )
}

function Users(){
    return(
        <>Users</>
    )
}
function Chats(){
    return(
        <>Chats</>
    )
}
function Rooms(){
    return(
        <>Rooms</>
    )
}

// const AppList = () => {
//     const {useList} = useState(['nitesh','sameet'])
//     const {list} = useList()

//     if(!list){
//         return null
//     }
//     return(
//         <>
//         <List list={list}/>
//         </>
//     )
// }

// const Example = () => {
//     const loading = false
//     return(
//         <>
//          {
//             loading ? <Loading/> : <List/>
//          }
//         </>
//     )
// }

// const Loading = () =>{ 
//     return(
//         <>Loading</>
//     )
// }
// const List = () =>{ 
//     return(
//         <>List</>
//     )
// }

// const ConditionDemoOne = () => {

//     const [loading]  = useState(false)
//     const [isLogin ]  = useState(true)
//     const [hasAuth ]  = useState(true)
//     return(
//         <>
//          {loading ? <div>loading</div> : <div className='content'>
//             {
//                  isLogin ? 
//                  (
//                     hasAuth ? (
//                         <div className='persmission'> yes permission</div>
//                     ) : (
//                         <div className='permission'>no permission</div>
//                     )
//                  )
//                  :
//                  (
//                     <div className="go_login"> please login first</div>
//                  )
//             }</div>}
//         </>
//     )
// }

// const AppTernaryExpressions = () => {
//     const isMobilePhone = true 
//     return(
//         <>
//         {isMobilePhone ? <Desktop/> : <Tablet/>}
//         </>
//     )
// }

// const AppTernaryExpressions = () => {
//     const isMobilePhone = true 
//     return(
//         <>
//         {isMobilePhone ? <Desktop/> : null}
//         </>
//     )
// }


// function Desktop(){
//     return(
//         <>Desktop</>
//     )
// }
// function Tablet(){
//     return(
//         <>Tablet</>
//     )
// }
