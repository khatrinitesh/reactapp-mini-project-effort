import React from 'react';
import getImageUrl from './utils';
import {people} from './data';
// import { DateRange } from '@material-ui/icons';

export default function CustomApp() {
  return (
    <div>
        {/* <Card>
            <div className='card-body'>
                <button className='btn btn-primary'>Primary</button>
                <button className='btn btn-success'>success</button>
                <button className='btn btn-warning'>warning</button>
                <button className='btn btn-danger'>danger</button>
                <button className='btn btn-default'>default</button>
            </div>
        </Card> */}
        {/* <ul>
            <Item name='nitesh' isPacked={true}/>
            <br/>
            <Item name='sameet' isPacked={true}/>
            <br/>
            <Item name='manisha' isPacked={false}/>
            <br/>
            <Item name='urvashi' isPacked={true}/>
            <br/>
            <Item name='arvind' isPacked={true}/>
        </ul> */}
        {/* <Data/> */}
        {/* <Recipe drinkers={2}/> */}
        {/* <ExampleAlert message="uploading">Example 1</ExampleAlert>
        <ExampleAlert message="Alert">Example 2</ExampleAlert> */}
        <Upload/>
        <hr/>
        <Alert messagebox="this is a paragraph"/>
    </div>
  )
}

function Button({onClick,children}){
    return(
        <>
         <button onClick={onClick}>{children}</button>
        </>
    )
}

function Upload(){
    function updateHandle(){
        console.log('update upload')
    }
    return(
        <>
         <Button onClick={updateHandle}>Click upload</Button>
        </>
    )
}

function Alert({messagebox}){
    function updateAlert(){
        console.log('update alert')
    }
    return(
        <>
        {messagebox}
         <Button onClick={updateAlert}>Click alert</Button>
        </>
    )
}

// function ExampleAlert({message,children}){
//     return(
//         <>
//          <button onClick={() => console.log(message)}>{children}</button>
//         </>
//     )
// }

// function Example(){

//     function handleClick(){
//         console.log('this is an example')
//     }
//     return(
//         <>
//          <button onClick={() => handleClick(console.log('sadsd'))}>Click</button>
//         </>
//     )
// }


// function Guest({guest}){
//    let cups = []
//    for(let i=0;i<12;i++){
//      cups.push(<Cup key={i} guest={i} />)
//    }
//    return cups
// }

// function Cup({ guest }) {
//     return <h2>Tea cup for guest #{guest}</h2>;
//   }
  


// let guest = 0
// function Guest(){
//     guest = guest + 2
//     return(
//         <>#{guest}</>
//     )
// }

// function Recipe({ drinkers }) {
//     return (
//       <ol>    
//         <li>Boil {drinkers} cups of water.</li>
//         <li>Add {drinkers} spoons of tea and {15 * drinkers} spoons of spice.</li>
//         <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//       </ol>
//     );
//   }


  function Data(){
    return(
        <>
        {people.map((val) => {
            const {name,profession,accomplishment} = val;
            return(
                <>{name} - {profession} - {accomplishment} <br/></>
            )
        })}</>
    )
  }


function Item({name,isPacked}){
    return(
        <>
         {name} - {isPacked && '✔'}
        </>
    )
}

// function Item({name,isPacked}){
//     return(
//         <>
//          {isPacked ? (<del>
//           {name + ' ✔'}
//         </del>) : (name)} 
//         </>
//     )
// }

// function Item({name,isPacked}){
//     if(isPacked){
//         return <li className='item'>{name} &#10003;</li>
//     }
//     else{
//         return <li className='item'>{name} &times;</li>
//     }
// }

// function Card({children}){
//     return(
//         <>
//         <div className="card">
//                 {children}
//         </div>
//         </>
//     )
// }



// function Profile(){
//     return(
//         <> 
//             <Avatar person={{name:'nitesh',imageId:'1bX5QH6'}} size={100}/>
//         </>
//     )
// }

// function Avatar({person,size}){
//     return(
//         <>
//         <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt="Lin Lanying"
//       width={100}
//       height={100}/>
//     </>
//     )
// }

// const person = {
//     name:'nitesh',
//     theme:{
//         backgroundColor:'red',
//         color:'white',
//         padding:'10px',
//     }
// }

// function PersonGroup(){
//     return(
//         <div style={person.theme}>
//             <h3>{person.name}</h3>
//         </div>
//     )
// }


// const today = new Date();
// function formatDate(date) {
//     return new Intl.DateTimeFormat(
//       'en-US',
//       { weekday: 'long' }
//     ).format(date);
//   }

// function CurrentDate(){
//     return(
//         <>
//             {formatDate(today)}
//         </>
//     )
// }


// function Text(){
//     const name = 'nitesh khatri'
//     return(
//         <>
//         {name}
//         </>
//     )
// }


// function Avatar(){

//     const imageurl = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const desc = 'Gregorio Y. Zara';
//     return(
//         <>
//             <img src={imageurl} alt={desc}/>
//         </>
//     )
// }


// function Cup({count}){
//     return (
//         <>
//          <h2>Test Cup for guest #{count}</h2>
//         </>
//     )
// }

// function List(){
//     const listItems = people.map(person => {
//         return(
//             <li key={person.id}>
//                 <img src={getImageUrl(person)} alt={person.name}/>
//                 <p>
//                     <b>{person.name}:</b> {" " + person.profession + ' '}
//                     known for {person.accomplishment}
//                 </p>
//             </li>
//         )
//     })
//     return(
//         <>
//             <article>
//                 <h1>Scientists</h1>
//                 <ul>{listItems}</ul>
//             </article>
//         </>
//     )
// }

// function PackingList(){
//     return(
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item isPacked={true} name="Space suit"/>
//                 <Item isPacked={true} name="Rahul Dravid"/>
//                 <Item isPacked={false} name="VVS Laxman"/>
//             </ul>
//         </section>
//     )
// }

// function Item({name,isPacked}){
//     return(
//         <li>
//             {name} {isPacked && '✔'}
//         </li>
//     )
// }

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
