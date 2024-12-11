import React from 'react'


export default function TodoDisplay(props) {





  return (
    props.listItems && 
   <ul className='ml-5 mt-5 flex flex-col gap-y-3'>
<h1 className='font-bold text-lg'>Display Todos..</h1>

{props.listItems.map((items)=> {

    return <li key={items.key} className='flex justify-between gap-x-3'>
         <span>{items.task}</span>
         <button className='rounded-md
     bg-blue-600 px-5 py-1 text-white active:scale-105 transition-all duration-200' onClick={()=>{props.remove(items.key)}}>Rem</button>
         </li>
})}
   </ul>
   
  )
}
