import React,{useState} from 'react';

const User = () => {

	const user = {
		name:'nitesh',
		email:'nitesh.khatri88@gmail.com'
	}
	return(
		<>
		 <p>Name: {user.name}</p>
		 <p>Email: {user.email}</p>
		</>
		)
}

export default User;