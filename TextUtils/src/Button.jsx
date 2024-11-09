import React from 'react'

export default function Button({link="/",text,click=null}) {
  return (

    <button className="border-2 border-gray-300 text-gray-300 px-3 p-1 rounded-md hover:border-green-600 hover:bg-green-600 hover:text-white transition-all duration-150"    
    onClick={click}
    >
        
        {text}
    </button>
  )
}
