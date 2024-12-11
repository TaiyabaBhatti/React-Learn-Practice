import React, { useState } from 'react'
import TodoDisplay from './TodoDisplay';
import {v4 as uuidv4} from 'uuid'

export default function Todo() {


    const [newItem,setNewItem] = useState("");
    const [todosArr,setArr] = useState([]);
const addItem = () => {

if(newItem === ""){
    return;
}

setArr((prev)=>{
    return [...prev,{task:newItem, key:uuidv4() }]
})

 setNewItem("")

}

const handleInput = (event) =>{

    let inputValue = event.target.value;
    setNewItem(inputValue);

}

const deletItem = (unId) => {

    setArr((prev)=>{
        return [...prev.filter(item => item.key != unId)]
    })
  
    
    }
    



  return (
    <div className='m-auto py-2 px-3 max-w-80 mt-6 bg-gray-400'>
<div className='flex gap-x-2 place-content-center'>
    <input type="text" value={newItem} onChange={handleInput} className='outline-none px-2'/>
    <button className='rounded-md
     bg-blue-600 px-5 py-1 text-white active:scale-105 transition-all duration-200' onClick={addItem}>Add</button>
</div>
<TodoDisplay listItems={todosArr} remove={deletItem}/>

    </div>
  )
}
