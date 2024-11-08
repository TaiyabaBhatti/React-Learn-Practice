import React, { useState } from 'react'
import Button from './Button'

export default function Textform() {

    let [text,textChange] = useState("Enter Text");

let update = () =>{
    let newText=text.toUpperCase();
    textChange(newText)
}

let handleChange = (event) => {
    textChange(event.target.value)  
}


  return (
    <div className='p-2 max-w-xl m-auto'>
    <div className="flex flex-col gap-y-2 mb-3">
        {/* <h1>Redender: {text}</h1> */}
      <label htmlFor="exampleFormControlTextarea1" className="font-bold">Enter Your Text Below</label>
      <textarea className="rounded-sm p-2 outline-none border-2 border-gray-300" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange}></textarea>
    </div>
    <div className='flex flex-row gap-x-2'>
   <Button text="ToUpperCase" click={update}/>
   <Button text="ToLowerCase"/>
   <Button text="ToCapitalize"/>
   </div>
       </div>
  )
}
