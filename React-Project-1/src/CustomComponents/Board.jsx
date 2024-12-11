import React, { useState } from 'react'

export default function Board() {

// const [count,setCount] = useState({
//     blue:0,
//     red:0,
//     yellow:0,
//     green:0
// });

const [count,setCount] = useState([0,0,0,0])

// let countHandler = () => {
// count.blue += 1;
// setCount({...count})
// }

let countHandler = () =>{


setCount(()=>{
    
return [...count,count[0] +=1]

})
}


  return (
    <div className='m-auto max-w-48 mt-6'>
     <ul className='px-7 bg-gray-600  py-2 flex flex-col gap-y-3'>
        <li>
            <p className='font-bold text-white'>Blue moves: <span>{count[0]}</span></p>
            <button className='bg-blue-800 px-5 py-1 text-white' onClick={countHandler}>+<span>1</span></button>
        </li>
        <li>
            <p className='font-bold text-white'>Red moves: <span>{count[1]}</span></p>
            <button className='bg-red-800 px-5 py-1 text-white'>+<span>1</span></button>
        </li>
        <li>
            <p className='font-bold text-white'>Yellow moves: <span>{count[2]}</span></p>
            <button className='bg-yellow-500 px-5 py-1 text-white'>+<span>1</span></button>
        </li>
        <li>
            <p className='font-bold text-white'>Green moves: <span>{count[3]}</span></p>
            <button className='bg-green-600 px-5 py-1 text-white'>+<span>1</span></button>
        </li>
     </ul>
    </div>
  )
}
