import React,{useState} from 'react';
import User from './user';

const withLoader = (WrappedComponent) => {
	return(props) => {
		const [loading,setLoading] = useState();

		setTimeout(() => {
			setLoading(false);
		},2000)

		return(
			<div>
			 {loading ? <p>Loading...</p> : <WrappedComponent/>}
			</div>
			)
	}
}

export default withLoader;