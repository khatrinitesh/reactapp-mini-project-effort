import React,{useEffect,useState} from 'react';
import UserData from './userdata';

const API = 'https://jsonplaceholder.typicode.com/users'

export default function CustomApp () {

	const [users,setUsers] = useState([])

	const featureUsers = async (url) => {
		try{
			const res = await fetch(url)
			const data = await res.json();
			if(data.length> 0){
				setUsers(data);
			}
			console.log(data)
		}
		catch(e){
			console.log(e);
		}
	}

	useEffect(() => {
		featureUsers(API);
	},[])
  return(
  		<>
  		<table>
  		 <thead>
  		  <tr>
  		   <th>sr. no .</th>
  		   <th>name</th>
  		   <th>email</th>
  		   <th>address</th>
  		  </tr>
  		 </thead>
  		 <tbody>
  		  <UserData users={users}/>
  		 </tbody>
  		</table>
  		</>
  	)
}