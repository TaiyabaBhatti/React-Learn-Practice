import React, {useState} from 'react'

export default function Counter2() {

let [count,setCount] = useState(0    
);

let increment = ()=>{

    // Just update by one
// setCount(count + 1) 
// setCount(count + 1)

setCount(count += 1)
setCount(count += 1)

// Funtion version better performance
// setCount(prevCount => prevCount + 1)
// setCount(prevCount => prevCount + 1)
}
let decrement = ()=>{
    
    setCount(count -= 1)
}


  return (
    <div className='mt-20'>





        <button className='border-2 rounded-md bg-blue-500 text-white px-5 py-2 text-xl' onClick={decrement}>-</button>
        <span className='mx-3'>{count}</span>
        <button className='border-2 rounded-md bg-blue-500 text-white px-5 py-2 text-xl' onClick={increment}>+</button>
    </div>
  )
}
