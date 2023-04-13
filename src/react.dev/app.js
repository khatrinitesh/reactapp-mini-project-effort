import React,{useState,useEffect,useReducer,useRef} from 'react';
import getImageUrl from './utils';
import {people} from './data';
// import { itemClassName } from 'react-horizontal-scrolling-menu/dist/types/constants';
// import { DateRange } from '@material-ui/icons';
// import {sculptureList} from './data2';
import Section from './section';
import Heading from './heading';
import {initialTravelPlan} from "./places";

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
        {/* <Upload/>
        <hr/>
        <Alert messagebox="this is a paragraph"/> */}
        {/* <Item name="nitesh" isPacked={true}/>
        <br/>
        <Item name="sameet" isPacked={true}/>
        <br/>
        <Item name="arvind" isPacked={true}/>
        <br/>
        <Item name="urvashi" isPacked={true}/>
        <br/>
        <Item name="manisha" isPacked={false}/>
        <br/> */}
        {/* <ToggleSwitch/> */}
        {/* <TrafficLight/> */}
        {/* <MovingDot/> */}
        {/* <FormExample/> */}
        {/* <ArrayExample/> */}
        {/* <ManagingState/> */}
        {/* <Accordion/> */}
        {/* <Messenger/> */}
        {/* <TaskApp/> */}
        {/* <Section>
            <Heading>Title</Heading>
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                    <Section>
                        <Heading>Sub-heading</Heading>
                        <Heading>Sub-heading</Heading>
                        <Heading>Sub-heading</Heading>
                        <Section>
                            <Heading>Sub-sub-heading</Heading>
                            <Heading>Sub-sub-heading</Heading>
                            <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section> */}
        {/* <PlaceTree/> */}
        {/* <ColorExample/> */}
        {/* <Child>nitesh khatri</Child> */}
        {/* <ExampleVideo/> */}
        <Clicked/>
    </div>
  )
}

function Clicked(){

    const [count,setCount] = useState(0);

    const ref = useRef(0)

    function btnClick(){
        ref.current = ref.current+1
        setCount(prev => prev + 1)
    }
    return(
        <>
        <button onClick={btnClick}>clicked {ref.current}</button>
        </>
    )
}

function ExampleVideo(){
    const [isPlaying, setIsPlaying] = useState(false);

    function handlePlay(){
        setIsPlaying(!isPlaying)
    }
    
    return(
        <>
        <button onClick={handlePlay}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <VideoExample
            isPlaying={isPlaying}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
        </>
    )
}


function VideoExample({src,isPlaying}){
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      }, [isPlaying]);

    return <video src={src} ref={ref} loop playsInline />
}


// function Child({children}){
//     return(
//         <>
//         <div className='children'>
//             {children}
//         </div></>
//     )
// }

// function ColorExample() {
//     const time = useTime();
//     const [color, setColor] = useState('lightcoral');
//     return (
//       <div>
//         <p>
//           Pick a color:{' '}
//           <select value={color} onChange={e => setColor(e.target.value)}>
//             <option value="lightcoral">lightcoral</option>
//             <option value="midnightblue">midnightblue</option>
//             <option value="rebeccapurple">rebeccapurple</option>
//           </select>
//         </p>
//         <Clock color={color} time={time.toLocaleTimeString()} />
//       </div>
//     );
//   }

// function Clock({ color, time }) {
//     return (
//       <h1 style={{ color: color }}>
//         {time}
//       </h1>
//     );
//   }


// function useTime() {
//     const [time, setTime] = useState(() => new Date());
//     useEffect(() => {
//       const id = setInterval(() => {
//         setTime(new Date());
//       }, 1000);
//       return () => clearInterval(id);
//     }, []);
//     return time;
//   }

// function PlaceTree({ id, placesById }) {
//     const place = placesById[id];
//     const childIds = place.childIds;
//     return (
//       <li>
//         {place.title}
//         {childIds.length > 0 && (
//           <ol>
//             {childIds.map(childId => (
//               <PlaceTree
//                 key={childId}
//                 id={childId}
//                 placesById={placesById}
//               />
//             ))}
//           </ol>
//         )}
//       </li>
//     );
//   }
  
//   function TravelPlan() {
//     const [plan, setPlan] = useState(initialTravelPlan);
//     const root = plan[0];
//     const planetIds = root.childIds;
//     return (
//       <>
//         <h2>Places to visit</h2>
//         <ol>
//           {planetIds.map(id => (
//             <PlaceTree
//               key={id}
//               id={id}
//               placesById={plan}
//             />
//           ))}
//         </ol>
//       </>
//     );
//   }

// function TaskApp() {
//     const [tasks, dispatch] = useReducer(
//       tasksReducer,
//       initialTasks
//     );
  
//     function handleAddTask(text) {
//       dispatch({
//         type: 'added',
//         id: nextId++,
//         text: text,
//       });
//     }
  
//     function handleChangeTask(task) {
//       dispatch({
//         type: 'changed',
//         task: task
//       });
//     }
  
//     function handleDeleteTask(taskId) {
//       dispatch({
//         type: 'deleted',
//         id: taskId
//       });
//     }
  
//     return (
//       <>
//         <h1>Prague itinerary</h1>
//         <AddTask
//           onAddTask={handleAddTask}
//         />
//         <TaskList
//           tasks={tasks}
//           onChangeTask={handleChangeTask}
//           onDeleteTask={handleDeleteTask}
//         />
//       </>
//     );
//   }

// function tasksReducer(tasks, action) {
//     switch (action.type) {
//       case 'added': {
//         return [...tasks, {
//           id: action.id,
//           text: action.text,
//           done: false
//         }];
//       }
//       case 'changed': {
//         return tasks.map(t => {
//           if (t.id === action.task.id) {
//             return action.task;
//           } else {
//             return t;
//           }
//         });
//       }
//       case 'deleted': {
//         return tasks.filter(t => t.id !== action.id);
//       }
//       default: {
//         throw Error('Unknown action: ' + action.type);
//       }
//     }
//   }
  
//   let nextId = 3;
//   const initialTasks = [
//     { id: 0, text: 'Visit Kafka Museum', done: true },
//     { id: 1, text: 'Watch a puppet show', done: false },
//     { id: 2, text: 'Lennon Wall pic', done: false }
//   ];
  

// function Messenger() {
//     const [to, setTo] = useState(contacts[0]);
//     return (
//       <div>
//         <ContactList
//           contacts={contacts}
//           selectedContact={to}
//           onSelect={contact => setTo(contact)}
//         />
//         <Chat contact={to} />
//       </div>
//     )
//   }
  
//   const contacts = [
//     { name: 'X', email: 'xxx@mail.com' },
//     { name: 'Y', email: 'yyy@mail.com' },
//     { name: 'Z', email: 'zzz@mail.com' }
//   ];

// function ContactList({
//     selectedContact,
//     contacts,
//     onSelect
//   }) {
//     return (
//       <section className="contact-list">
//         <ul>
//           {contacts.map(contact =>
//             <li key={contact.email}>
//               <button onClick={() => {
//                 onSelect(contact);
//               }}>
//                 {contact.name}
//               </button>
//             </li>
//           )}
//         </ul>
//       </section>
//     );
//   }

// function Chat({ contact }) {
//   const [text, setText] = useState('');
//   return (
//     <section className="chat">
//       <textarea
//         value={text}
//         placeholder={'Chat to ' + contact.name}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button>Send to {contact.email}</button>
//     </section>
//   );
// }

// function Accordion(){
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <>
//           <h2>Almaty, Kazakhstan</h2>
//           <Panel
//             title="About"
//             isActive={activeIndex === 0}
//             onShow={() => setActiveIndex(0)}
//           >
//             With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//           </Panel>
//           <Panel
//             title="Etymology"
//             isActive={activeIndex === 1}
//             onShow={() => setActiveIndex(1)}
//           >
//             The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//           </Panel>
//         </>
//     )
// }

// function Panel({
//     title,
//     children,
//     isActive,
//     onShow
//   }) {
//     return (
//       <section className="panel">
//         <h3>{title}</h3>
//         {isActive ? (
//           <p>{children}</p>
//         ) : (
//           <button onClick={onShow}>
//             Show
//           </button>
//         )}
//       </section>
//     );
//   }



// function ManagingState(){
//     const [answer,setAnswer] = useState('');
//     const [error,setError] = useState(null);
//     const [status,setStatus] = useState('typing');


//     if(status === 'success'){
//         return <h1>That's right!</h1>
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         setStatus('submitting');
//         try {
//           await submitForm(answer);
//           setStatus('success');
//         } catch (err) {
//           setStatus('typing');
//           setError(err);
//         }
//       }
    
//       function handleTextareaChange(e) {
//         setAnswer(e.target.value);
//       }



//     return(
//         <>
//             <h2>City quiz</h2>
//             <p>
//                 In which city is there a billboard that turns air into drinkable water?
//             </p>
//             <form onSubmit={handleSubmit}>
//                 <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'}/>
//                 <br />
//                 <button disabled={answer.length === 0 || status === "submitting"}>Submit</button>
//                 {error !== null && <p className='Error'>{error.message}</p>}
//             </form>
//         </>
//     )
// }

// function submitForm(answer) {
//     // Pretend it's hitting the network.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let shouldError = answer.toLowerCase() !== 'lima'
//         if (shouldError) {
//           reject(new Error('Good guess but a wrong answer. Try again!'));
//         } else {
//           resolve();
//         }
//       }, 1500);
//     });
//   }
  

// function ArrayExample(){
//     const initialProducts = [{
//         id: 0,
//         name: 'Baklava',
//         count: 1,
//       }, {
//         id: 1,
//         name: 'Cheese',
//         count: 5,
//       }, {
//         id: 2,
//         name: 'Spaghetti',
//         count: 2,
//       }];

      

//       const [products,setProducts] = useState(initialProducts);

//       function handleInc(productId){
//         setProducts(products.map(val =>{
//             if(val.id === productId){
//                 return{
//                     ...val,
//                     count:val.count+1
//                 }
//             }
//             else{
//                 return val
//             }
//         }))
//       }

//     return(
//         <>
//          <ul>
//          {products.map(product => (
//                 <li key={product.id}>
//                 {product.name}
//                 {' '}
//                 (<b>{product.count}</b>)
//                 <button onClick={() => {
//                     handleInc(product.id);
//                 }}>
//                     +
//                 </button>
//                 </li>
//             ))}
//          </ul>
//         </>
//     )
// }


// function ArrayExample(){
//     let nextId = 3;
//     const initialArtists = [
//         { id: 0, name: 'Marta Colvin Andrade' },
//         { id: 1, name: 'Lamidi Olonade Fakeye'},
//         { id: 2, name: 'Louise Nevelson'},
//     ]

//     const [name,setName] = useState('')
//     const [artists,setArtists] = useState(initialArtists)

//     function handleClick() {
//         const insertAt = 1; // Could be any index
//         const nextArtists = [
//           // Items before the insertion point:
//           ...artists.slice(0, insertAt),
//           // New item:
//           { id: nextId++, name: name },
//           // Items after the insertion point:
//           ...artists.slice(insertAt)
//         ];
//         setArtists(nextArtists);
//         setName('');
//       }

//     return(
//         <>
//          <h1>Inspiring sculptors:</h1>
//             <input
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//             />
//             <button onClick={handleClick}>
//                 Insert
//             </button>
//             <ul>
//                 {artists.map(artist => (
//                 <li key={artist.id}>{artist.name} 
//                 <button onClick={() => btnReove}></button></li>
//                 ))}
//             </ul>
//         </>
//     )
// }

// function ArrayExample(){
//     let initialCounters = [0,0,0]

//     const [counters,setCounters] = useState(initialCounters);

//     function handleInc(index){
//         const nextData = counters.map((c,i) => {
//             if(i === index){
//                 return c + 1 
//             }
//             else{
//                 return c;
//             }
//         });
//         setCounters(nextData)
//     }



//     return(
//         <>
//             {counters.map((counter,i) => {
//                 return(
//                     <li key={i}>
//                         {counter}
//                         <button onClick={() => handleInc(i)}>+1</button>
//                     </li>
//                 )
//             })}
//         </>
//     )
// }

// function ArrayExample(){
//     let initialShapes = [
//         { id: 0, type: 'circle', x: 50, y: 100 },
//         { id: 1, type: 'square', x: 150, y: 100 },
//         { id: 2, type: 'circle', x: 250, y: 100 },
//     ];

//     const [shapes,setShapes] = useState(initialShapes);

//     function handleClick() {
//         const nextShapes = shapes.map(shape => {
//           if (shape.type === 'square') {
//             // No change
//             return shape;
//           } else {
//             // Return a new circle 50px below
//             return {
//               ...shape,
//               y: shape.y + 50,
//             };
//           }
//         });
//         // Re-render with the new array
//         setShapes(nextShapes);
//       }


//     return(
//         <>
//          <button onClick={handleClick}>move circles down!</button>
//          {shapes.map((shape) => {
//             return(
//                 <div key={shape.id} style={{background: 'purple',
//                 position: 'absolute',
//                 left: shape.x,
//                 top: shape.y,borderRadius:shape.type === 'circle' ? '50%' : '',width:20,height:20}}></div>
//             )
//          })}
//         </>
//     )
// }

// function ArrayExample(){
//     let initialArtists = [
//         { id: 0, name: 'Marta Colvin Andrade' },
//         { id: 1, name: 'Lamidi Olonade Fakeye'},
//         { id: 2, name: 'Louise Nevelson'},
//       ];

//       const [user,setUser] = useState(initialArtists);

//    const btnRemove = (id) => {
//     user.splice(id,1)
//     setUser([...user])
//    }
//     // const btnRemove = (id) => {
//     //         const finalData = user.filter((val) => val.id !== id)
//     //         setUser(finalData);
//     //   }


//     return(
//         <>
//          <h1>Inspiring sculptors:</h1>
//          <ul>
//             {user.map((val) => {
//                 return(
//                     <li key={val.id}>
//                         {val.name}
//                         <button onClick={(e) => btnRemove(val.id)}>Remove</button>
//                     </li>
//                 )
//             })}
//          </ul>
//         </>
//     )
// }

// function ArrayExample(){

//     let nextId = 0;

//     const [name,setName] = useState('');
//     const [artists,setArtists] = useState([]);

//     const btnAdd = (e) => {
//         setArtists([
//             ...artists,
//             {
//                 id:nextId,
//                 name:name
//             }
//         ])
//     }

//     const btnRemove = (id) => {
//         artists.splice(id,1);
//         setArtists([...artists])
//     }


//     return(
//         <>
//          <h1>Inspiring sculptors:</h1>
//          <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
//          <button onClick={btnAdd}>Add</button>
//          <ul>
//             {artists.map((val) =>{
//                 return(
//                     <li key={val.id}>{val.name} <button onClick={() => btnRemove(val.id)}>Remove</button></li>
//                 )
//             })}
//          </ul>
//         </>
//     )
// }

// function ArrayExample(){
//     let nextId = 0 ;

//     const [name,setName] = useState('')
//     const [artists,setArtists] = useState([]);


//     return(
//         <>
//          <h1>Inspiring sculptors:</h1>
//          <input type="text" value={name} onChange={e => setName(e.target.value)}/>
//          <button onClick={() => artists.push({id:nextId++,name:name})}>Add</button>
//          <ul>
//             {artists.map((artist) => {
//                 return(
//                     <li key={artist.id}>
//                         {artist.name}
//                     </li>
//                 )
//             })}
//          </ul>
//         </>
//     )
// }

// function FormExample(){

//     const [person,updatePerson] = useState({
//         name:'Niki de Saint Phalle',
//         artwork:{
//             title:'Blue Nana',
//             city:'Hamburg',
//             img:'https://i.imgur.com/Sd1AgUOm.jpg',
//         }
//     });
//     function handleNameChange(e){
//         updatePerson(draft => {
//             draft.name = e.target.value;
//         })
//     }
//     function handleTitleChange(e){
//         updatePerson(draft => {
//             draft.artwork.title= e.target.value;
//         })
//     }
//     function handleCityChange(e){
//         updatePerson(draft => {
//             draft.artwork.city = e.target.value;
//         })
//     }
//     function handleImageChange(e){
//         updatePerson(draft => {
//             draft.artwork.img = e.target.value;
//         })
//     }
//     return(
//         <>
//             <label>
//                 Name: 
//                 <input type="text" value={person.name} onChange={handleNameChange}/>
//             </label>
//             <br/>
//             <label>
//                 Title: 
//                 <input type="text" value={person.artwork.title} onChange={handleNameChange}/>
//             </label>
//             <br/>
//             <label>
//                 City: 
//                 <input type="text" value={person.artwork.city} onChange={handleNameChange}/>
//             </label>
//             <br/>
//             <label>
//                 Image: 
//                 <input type="text" value={person.artwork.img} onChange={handleNameChange}/>
//             </label>
//             <br/>
//             <img src={person.artwork.img}/>
//         </>
//     )
// }

// function FormExample(){
//     const [person,setPerson] = useState({
//         name: 'Niki de Saint Phalle',
//         artwork: {
//             title: 'Blue Nana',
//             city: 'Hamburg',
//             image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//         }
//     });

//     const handleNameChange = (e) => {
//         setPerson({
//             ...person,
//             name:e.target.value
//         })
//     }
//     const handleTitleChange = (e) => {
//         setPerson({
//             ...person,
//             title:e.target.value
//         })
//     }
//     const handleCityChange = (e) => {
//         setPerson({
//             ...person,
//             city:e.target.value
//         })
//     }
//     const handleImageChange = (e) => {
//         setPerson({
//             ...person,
//             image:e.target.value
//         })
//     }


//     return(
//         <>
//          <label>
//             Name: <input value={person.name} onChange={handleNameChange}/>
//          </label>
//          <label>
//             Title: <input value={person.artwork.title} onChange={handleTitleChange}/>
//          </label>
//          <label>
//             City: <input value={person.artwork.city} onChange={handleCityChange}/>
//          </label>
//          <label>
//             Image: <input value={person.artwork.image} onChange={handleImageChange}/>
//         </label>
//         <hr/>
//         {person.name}
//         <br/>
//         {person.artwork.title}
//         <br/>
//         {person.artwork.city}
//         <br/>
//         <img src={person.artwork.image} alt={person.artwork.title}/>
//         <br/>
//         </>
//     )
// }

// function FormExample(){
//     const [person,setPerson] = useState({
//         firstName:'nitesh',
//         lastName:"khatri",
//         email:"nitesh.khatri88@gmail.com"
//     });

//     const handleChange = (e) => {
//         setPerson({
//             ...person,
//             [e.target.name]:e.target.value
//         })
//     }
//     return(
//         <>
//         <form>
//             <label>
//                 First name:
//                 <input type="text" value={person.firstName} onChange={handleChange}/>
//             </label>
//             <label>
//                 Last name: 
//                 <input type="text" value={person.lastName} onChange={handleChange}/>
//             </label>
//             <label>
//                 Email: 
//                 <input type="text" value={person.email} onChange={handleChange}/>
//             </label>
//         </form>
//         <p>
//             {person.firstName} { " "}
//             {person.lastName} { " "}
//             {person.email} { " "}
//         </p>
//         </>
//     )
// }

// function MovingDot(){

//     const [position,setPosition] = useState({
//         x:0,
//         y:0,
//     });


//     const handleMove = (e) => {
//         setPosition({
//             x:e.clientX,
//             y:e.clientY
//         })
//     }

//     return(
//         <>
//             <div onPointerMove={handleMove} style={{ position: 'relative',
//         width: '100vw',
//         height: '100vh',}}>
//             <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//         </div>
         
//         </>
//     )
// }


// function TrafficLight(){
//     const [text,setText] = useState(true)

//     function changeToggle(){
//         setText(!text);
//     }
//     return(
//         <>
//          <button onClick={changeToggle}>Change to {text ? 'Stop' : 'Walk'}</button>
//          {text ? <Walk/> : <Stop/>}
//         </>
//     )
// }

// function Walk(){
//     return(
//         <>
//          <span className="textgreen">Walk</span>
//         </>
//     )
// }
// function Stop(){
//     return(
//         <>
//          <span className="textred">Stop</span>
//         </>
//     )
// }

// function Form(){

//     const [to,setTo] = useState('Nitesh');
//     const [message,setMessage] = useState('Hi');

//     const handleSubmit= (e) => {
//         e.preventDefault();
//         setTimeout(() => {
//             console.log(`you said ${message} to ${to}`)
//         },1000)
//     }
//     return(
//         <>
//          <form onSubmit={handleSubmit}>
//             <label>
//                 to: {" "}
//                 <select value={to} onChange={e => setTo(e.target.value)}>
//                     <option value="nitesh">Nitesh</option>
//                     <option value="sameet">Sameet</option>
//                 </select>
//             </label>
//             <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
//             <button>Send</button>
//          </form>
//         </>
//     )
// }



// function Counter(){

//     const [counter,setCounter] = useState(0);

//     const btnCount= () => {
//         setCounter(counter  + 5)
//     }
//     return(
//         <>
//         {counter}
//          <button onClick={btnCount}>+3</button>
//         </>
//     )
// }

// function Project(){

//     const [index,setIndex] = useState(0)
//     const [showMore,setShowMore] = useState(false)

//     let sculpture = sculptureList[index];

//     function handleClick(){
//         setIndex(index + 1)
//     }

//     function btnToggle(){
//         setShowMore(!showMore)
//     }
//     return(
//         <>
//          <button onClick={handleClick}>Next</button>
//          <h2>{sculpture.name}</h2>
//          <p>({index + 1} of sculptureList.length)</p>
//          <button onClick={btnToggle}>{showMore ? 'hide details' : 'show details'}</button>
//          {showMore && <p>{sculpture.description}</p>}
//          <br/>
//          <img src={sculpture.url} alt={sculpture.name}/>
//         </>
//     )
// }

// function ToggleSwitch(){

//     function btnToggle(){
//         let docbody = document.body.style;
//         if(docbody.backgroundColor === 'black'){
//             docbody.backgroundColor = 'white';
//         }
//         else{
//             docbody.backgroundColor = 'black';
//         }
//     }
//     return(
//         <>
//          <button onClick={btnToggle}>Click toggle</button>
//         </>
//     )
// }


// function FormExample(){
//     return(
//         <form onSubmit={(e) => console.log('submitting')}>
//             <input type='text'/>
//             <button>Send</button>
//         </form>
//     )
// }

// function Item({name,isPacked}){

//     let itemContent = name;
//     if(isPacked){
//         itemContent = name + ' ✔';
//     }
//     return(
//         <li className="item">{itemContent}</li>
//     )
// }

// function Item({name,isPacked}){
//     return(
//         <>
//          {name} - {isPacked && '✔'}
//         </>
//     )
// }

// function Item({name,isPacked}){
//     return(
//         <>
//          <li className='item'>
//             {isPacked ? (
//                 <del>{name + '✔'}</del>
//             ) : (name)}
//          </li>
//         </>
//     )
// }

// function Button({onClick,children}){
//     return(
//         <>
//          <button onClick={onClick}>{children}</button>
//         </>
//     )
// }

// function Upload(){
//     function updateHandle(){
//         console.log('update upload')
//     }
//     return(
//         <>
//          <Button onClick={updateHandle}>Click upload</Button>
//         </>
//     )
// }

// function Alert({messagebox}){
//     function updateAlert(){
//         console.log('update alert')
//     }
//     return(
//         <>
//         {messagebox}
//          <Button onClick={updateAlert}>Click alert</Button>
//         </>
//     )
// }

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


//   function Data(){
//     return(
//         <>
//         {people.map((val) => {
//             const {name,profession,accomplishment} = val;
//             return(
//                 <>{name} - {profession} - {accomplishment} <br/></>
//             )
//         })}</>
//     )
//   }


// function Item({name,isPacked}){
//     return(
//         <>
//          {name} - {isPacked && '✔'}
//         </>
//     )
// }

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
