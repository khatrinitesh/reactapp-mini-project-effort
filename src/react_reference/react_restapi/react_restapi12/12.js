import React from 'react';
import Fetcher from './fetcher';
const url = 'https://jsonplaceholder.typicode.com/users'

export default function CustomApp() {

  return (
    <Fetcher url={url}>
        {({isLoading,error,users}) => {
            if(isLoading){
                return <div>Loading...</div>
            }
            if(error){
                return <div>{error}</div>
            }
            return(
                <div>
                    {users.length > 0 && (
                        <ul>
                            {users.map((user) =>{
                                return(
                                    <li key={user.id}>{user.name}</li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            )
        }}
        </Fetcher>
  )
}
