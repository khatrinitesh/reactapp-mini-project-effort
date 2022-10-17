import React,{useState,createContext,useContext} from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {QueryClient,QueryClientProvider,useQuery} from '@tanstack/react-query';
import axios from 'axios';

// export const AppContext = createContext();

export default function CustomApp() {
  return (
    <div>
        <MainApp/>
    </div>
  )
}

function MainApp(){

  // const [username,setUsername] = useState('nitesh');

  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus:true,
    },
  }});
    return(
      <QueryClientProvider client={client}>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
        </QueryClientProvider>
    )
}

function Navbar(){
    return(
        <>
         <div>NAVBAR
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
        </div>
        </>
    )
}


function Profile() {
  // const {username,setUsername} = useContext(AppContext);
    return (
      <>
      Profile page
      {/* Profile {props.username} */}
      <br/>
      {/* <ChangeProfile setUsername={props.setUsername}/> */}
      </>
    )
  }

  function ChangeProfile(props){
    // const {setUsername} =useContext(AppContext)
    // const [newUsername,setNewUsername] = useState('')
    return(
      <>
      Change Profile
      <hr/>
      {/* <div>
        <input onChange={(e) => setNewUsername(e.target.value)}/>
        <button onClick={() => props.setUsername(newUsername)}>Change username</button>
        props */}
      </>
    )
  }

function Home() {
    // const {username} = useContext(AppContext);
    const {data:catData,isLoading,isError,refetch} = useQuery(['cat'],() => {
      return axios.get('https://catfact.ninja/fact').then((res) => res.data)
    });

    if(isError){
      return <h1>Sorry there was an error</h1>
    }
    if(isLoading){
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <p>{catData?.fact}</p>
        <button onClick={refetch}>Upate data</button>
      </div>
    )
  }
  

  function Contact() {
    return (
      <div>Contact</div>
    )
  }

  function Error(){
    return(
        <>404 page not found</>
    )
  }