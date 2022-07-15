import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Example/>
    </div>
  )
}

function Example(){
    const [name, setName] = useLocalStorage('name', 'John');

    return(
        <>
         <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
         {name}
        </>
    )
}

const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = React.useState(() => {
      try {
        const value = window.localStorage.getItem(keyName);
  
        if (value) {
          return JSON.parse(value);
        } else {
          window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } catch (err) {
        return defaultValue;
      }
    });
  
    const setValue = newValue => {
      try {
        window.localStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {}
      setStoredValue(newValue);
    };
  
    return [storedValue, setValue];
  };