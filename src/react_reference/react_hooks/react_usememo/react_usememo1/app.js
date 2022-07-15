import React, { useState } from "react";

export default function CustomApp(){
    const [counter1, setCounter1] = useState(0); // Counter 1
    const [counter2, setCounter2] = useState(0); // Counter 1
    const expensiveValue = computeExpensiveValue(counter1);
    // expensiveValue from computeExpensiveValue Function without useMemo()

    return(
        <>
          <div>
        <div>
            <h2>Counter 1: {counter1}</h2>
            <button onClick={() => setCounter1(counter1 + 1)}>+</button>
        </div>
        <div>
            <h2>Counter 2: {counter2}</h2>
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </div>
        <div>
            <h2>Expensive Value:</h2>
            {expensiveValue}
        </div>
    </div>
        </>
    )
}

// EXPENSIVE FUNCTION
const computeExpensiveValue = (count) => {
    console.log('this function is running...')
    for(let i=0;i<1000000000; i++){
        count += 1;
    }
    return count;
}