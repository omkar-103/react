import React, { useState } from 'react'

const Counter = () => {
//   Before return javascript works
//   let count = 0;


console.log("Counter is Rendering")
  let [count, setCount] = useState(0);
  
    return (
    <div>
        <h1>count is {count}</h1>
        <button onClick={() => {
           setCount(count + 1);
         
        }}> 
            Increment
        </button>
        
    </div>
  )
}

export default Counter