import React, { useRef } from "react";
import Counter from './counter';

export default function CustomApp() {

    const ref = useRef();

  return (
    <div>
        <button onClick={() => ref.current.handleSub()}>-</button>
        <Counter ref={ref}/>
        <button onClick={() => ref.current.handleAdd()}>+</button>
    </div>
  )
}
