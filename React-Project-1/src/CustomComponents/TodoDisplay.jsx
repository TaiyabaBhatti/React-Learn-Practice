import React from 'react'

export default function TodoDisplay({listItems}) {


  return (
    listItems && 
   <ul className='ml-5 mt-5 flex flex-col gap-y-3'>
<h1 className='font-bold text-lg'>Display Todos..</h1>

{listItems.map((items)=> {

    return <li className='flex justify-between gap-x-3'> {items}</li>
})}
   </ul>
   
  )
}
