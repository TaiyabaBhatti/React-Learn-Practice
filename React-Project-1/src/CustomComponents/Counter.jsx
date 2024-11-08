import React, { useState } from 'react'


export default function Counter() {

let [count,counter] = useState(0);

let updateCount = () =>{
   counter(count += 1);
}

// let count=0;

// function Update(){
//     count+=1;
//     console.log(count)
// }

  return (
    <div className=' gap-y-2'>
      <h1>{count}</h1>
      <button  onClick={updateCount}  className='active:bg-green-500 border-2 border-gray-500 px-3 py-1 mt-3'>Count</button>
    </div>
  )
}
