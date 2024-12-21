import React from 'react'
import Button from './Button'

export default function GenerateRecipe({recipeGen}) {
  return (
    <div className='bg-[#e5e7eb] px-3 py-4 rounded-md flex flex-row max-w-lg gap-3 items-end  m-auto justify-between'>

<div>
    <h1 className='font-semibold text-base'>Ready for a recipe?</h1>
    <p className='text-gray-500 text-sm'>Generate a recipe from your list of ingredients.</p>
</div>

<button className='border-2 border-orange-500 bg-orange-500 rounded-sm py-1 px-2 text-white' onClick={recipeGen}>Get a recipe</button>
    </div>
    
    
   
  )
}
