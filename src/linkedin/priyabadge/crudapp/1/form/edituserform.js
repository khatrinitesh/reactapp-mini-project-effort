import React,{ useEffect, useState } from "react";

const EditUserForm = (props) => {
    const [user,setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser)
    },[props]);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        console.log(user);
    }

    return(
        <>
         <form onSubmit={(e) => {e.preventDefault(); props.updateUser(user.id,user)}}>
            <label>Name</label>
            <input type='text' name='name' value={user.name} onChange={handleInputChange}/>
            <br />
            <label> UserName </label>
            <input type='text' name="username" value={user.username} onChange={handleInputChange}/>
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)}>cancel</button>
         </form>
        </>
    )
}

export default EditUserForm;