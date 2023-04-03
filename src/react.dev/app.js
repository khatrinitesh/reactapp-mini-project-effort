import React from 'react';
import getImageUrl from './utils';
import {people} from './data';

export default function CustomApp() {
  return (
    <div>
        <Cup count={1}/>
        <Cup count={2}/>
        <Cup count={3}/>
    </div>
  )
}


function Cup({count}){
    return (
        <>
         <h2>Test Cup for guest #{count}</h2>
        </>
    )
}

function List(){
    const listItems = people.map(person => {
        return(
            <li key={person.id}>
                <img src={getImageUrl(person)} alt={person.name}/>
                <p>
                    <b>{person.name}:</b> {" " + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>
        )
    })
    return(
        <>
            <article>
                <h1>Scientists</h1>
                <ul>{listItems}</ul>
            </article>
        </>
    )
}

function PackingList(){
    return(
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit"/>
                <Item isPacked={true} name="Rahul Dravid"/>
                <Item isPacked={false} name="VVS Laxman"/>
            </ul>
        </section>
    )
}

function Item({name,isPacked}){
    return(
        <li>
            {name} {isPacked && '✔'}
        </li>
    )
}

// function Profile(){
//     return(
//         <Card>
//             <Avatar size={100} person={{name:"Nitesh Khatri",imageId:'YfeOqp2'}}/>
//         </Card>
//     )
// }

// function Avatar({person,size}){
//     return(
//         <>
//           <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size}/>
//         </>
//     )
// }

// function Card({children}){
//     return(
//         <div className="card">
//             {children}
//         </div>
//     )
// }

// const person = {
//     name:'Gregorio Y. Zara',
//     theme:{
//         backgroundColor:'black',
//         color:'yellow'
//     }
// }

// function TodoList(){
//     return(
//         <>
//          <div style={person.theme}>
//             <h1>{person.name}'s Todos</h1>
//             <img
//                     className="avatar"
//                     src="https://i.imgur.com/7vQD0fPs.jpg"
//                     alt="Gregorio Y. Zara"
//                 />
//                 <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//          </div>
//         </>
//     )
// }

// function Profile(){
//     return(
//         <>
//         <img
//             src="https://i.imgur.com/MK3eW3As.jpg"
//             alt="Katherine Johnson"
//             />
//         </>
//     )
// }

// function Gallery(){
//     return(
//         <>
//          <h1>Amazing scientists</h1>
//          <Profile/>
//          <Profile/>
//          <Profile/>
//         </>
//     )
// }

// function TodoList(){
//     return(
//         <>
//          <h1>Hedy Lamarr's Todos</h1>
//             <img
//                 src="https://i.imgur.com/yXOvdOSs.jpg"
//                 alt="Hedy Lamarr"
//                 className="photo"
//             />
//             <ul>
//                 <li>Invent new traffic lights</li>
//                 <li>Rehearse a movie scene</li>
//                 <li>Improve spectrum technology</li>
//             </ul>
//         </>
//     )
// }
