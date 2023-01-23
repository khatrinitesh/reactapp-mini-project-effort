import React from 'react';

export default function CustomApp() {
    const isLoggedIn = true;
  return (
    <div>
        {isLoggedIn ? "BacK" : "please login first!!"}
    </div>
  )
}
