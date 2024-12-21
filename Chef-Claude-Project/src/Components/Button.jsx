import React from 'react'

export default function Button({addIngre}) {
  return (
   <button className='border-2 border-gray-700 bg-gray-700 rounded-sm px-4 py-1 text-white' onClick={addIngre}>Add Ingredient</button>
  )
}
