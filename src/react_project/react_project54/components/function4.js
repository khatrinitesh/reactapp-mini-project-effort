import React,{useState} from 'react';

export default function CustomFunction() {

    const [user,setUser] = useState({
        username:'',
        lastname:'',
        address:''
    })


    const handleInputChange = (field) => {
        return (e ) => {
            setUser(prevUser => ({
                ...prevUser,
                [field]:e.target.value
            }))
        }
    }


  return (
    <div className='content'>
         <input type='text' value={user.username} onChange={handleInputChange('username')}/>
         <input type='text' value={user.lastname} onChange={handleInputChange('lastname')}/>
         <input type='text' value={user.address} onChange={handleInputChange('address')}/>
         {JSON.stringify(user)}
    </div>
  )
}
