import React,{useState} from 'react';
import { Navigate,useParams,useSearchParams  } from "react-router-dom"

export default function About() {

  const [user,setUser] = useState('nitesh')
  const [searchParams] = useParams();


  const name = searchParams.get('name');

  if(!user){
    return <Navigate to="/" replace={true}/>
  }
  return (
    <div>
      <h2>About Us</h2>
      {name && <p></p>}
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}
