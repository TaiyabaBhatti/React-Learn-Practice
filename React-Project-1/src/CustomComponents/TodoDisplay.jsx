import React from 'react'


export default function TodoDisplay(props) {
  return (
    props.listItems && 
   <ul className='ml-5 mt-5 flex flex-col gap-y-3'>
<h1 className='font-bold text-lg'>Display Todos..</h1>

{props.listItems.map((items)=> {
    return <li key={items.key} className={`flex justify-between gap-x-3  px-2 py-1 bg-${items.isDone ?"pink-300" : "none"}`} >
         <span>{items.task}</span>
         <button className='rounded-md
     bg-blue-600 px-5 py-1 text-white active:scale-105 transition-all duration-200' onClick={()=>{props.remove(items.key)}}>Rem</button>
     <button className="rounded-md
     bg-blue-600 px-5 py-1 text-white active:scale-105 transition-all duration-200" onClick={()=>{props.update(items.key)}}
        >
          Update
        </button>
        <button className="rounded-md
     bg-blue-600 px-5 py-1 text-white active:scale-105 transition-all duration-200" onClick={()=>{props.done(items.key)}}
        >
          Done
        </button>
         </li>
})}
   </ul>
   
  )
}
