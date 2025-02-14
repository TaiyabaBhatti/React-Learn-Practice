import React from 'react'
import { languages } from './language'

export default function Options() {

  
  return (
    
 <div className='flex flex-wrap gap-x-1 gap-y-2 justify-center'>
      
{languages.map((element,index) => {
return <span  className={`p-2 ${element.color} rounded-sm text-center text-white`} key={index} >{element.text}</span>
}) }
    </div>







  )
}
