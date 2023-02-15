import React,{useState} from 'react';
import User from './user';
import withLoader from './app';

const CustomLoader = withLoader(User);

export default function CustomApp(){
	return(
		<>
			<CustomLoader/>
		</>)
}