import React,{useState} from 'react';
import UseFetch from './custom';
const url = 'https://jsonplaceholder.typicode.com/users'

export default function CustomApp(){
  const {isLoading,err,users,} = UseFetch(url)

  const [list,updateList] = useState(users);

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name")
    updateList(list.filter(item => item.name !== name));
   };

    if(isLoading){
        return <div>Loading...</div>
    }
    if(err){
        return <div>{err}</div>
    }
    return(
        <div>
            {users.length > 0 && (
                <ul>
                    {users.map((user) => {
                        return(
                            <li key={user.id}>
                                {user.name}
                                <button id={user.name} onClick={handleRemoveItem}>Remove</button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )

}
