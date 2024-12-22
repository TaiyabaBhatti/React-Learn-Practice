import React from 'react'
import { getRecipeFromChef } from './ai'

export default function ClaudeRecipe({ ingredientArr}) {


  const content =  getRecipeFromChef( ingredientArr)
  console.log(content)


  return (
    <section className='px-10 mt-10'>



{/* <div>
    <h1 className='font-semibold text-2xl text-gray-950 my-3'>Suggested recipe:</h1>
    <p className='text-gray-500'>Based on your available ingredients, I would recommend making a <strong>Creamy Garlic Parmesan Chicken dish</strong>. Here’s the recipe.</p>
</div> */}

{/* <div className='my-7'>
    <h1 className='font-bold text-base text-gray-700'>Ingredients:</h1>
    <ul className='list-disc pl-5 text-gray-500 mt-3'>
<li className=''>4 boneless, skinless chicken breasts</li>
<li>Salt and pepper to taste</li>
    </ul>
</div> */}


    </section>
  )
}
