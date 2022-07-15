import React, { useState, useEffect } from 'react';

const Example = () => {
    const [matches, setMatches] = useState(
      window.matchMedia("(min-width: 768px)").matches
    )
  
    useEffect(() => {
      window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches( e.matches ));
    }, []);
  
    return (
      <div >
        {matches && (<h1>Big Screen</h1>)}
        {!matches && (<h3>Small Screen</h3>)}
      </div>
    );
  }
  
  export default Example;
