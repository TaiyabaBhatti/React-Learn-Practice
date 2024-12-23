import React, { useState } from 'react'
import Header from './Header'
import InputListBlock from './InputListBlock'
import DisplayIngredient from './DisplayIngredient'
// import {v4 as uuidv4} from "uuid"
import GenerateRecipe from './GenerateRecipe'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromChef } from './ai'
// import { getRecipeFromChef } from './ai'


export default function ChefClaudeCard() {

  const [newIngre, setNewIngre] = useState("");
  const [recipeShow, setRecipeShow] = useState("");
  const [ingreArr, setIngreArr] = useState([]);
  const [loading, setLoading] = useState(false);

const handleOnChange = (event) => {

  let inputValue = event.target.value;
  setNewIngre(inputValue);
    
}

const addIngre = () => {


  if (newIngre === "") {
    return;
  }

  setIngreArr((prev) => {
    return [...prev,newIngre];
  });
  setNewIngre("");
}


const preventSubmission = (event) => {
event.preventDefault();
}

async function getRecipe() {
  try{
    setLoading(true)
    const contentMarkDownFormat = await getRecipeFromChef(ingreArr);
    setRecipeShow(contentMarkDownFormat);
  }
  
  catch(err){
console.error(err);
  }
  finally{
    setLoading(false)
  }

}





  return (
   
    <section className='flex justify-center items-center h-screen'>       
<div className='border-2 max-w-xl m-auto relative  bg-white rounded-sm py-2'>
        <Header/>
        <InputListBlock inputText={newIngre} Onhandler={handleOnChange}  addItem={addIngre} preventDef={preventSubmission}/>
        <DisplayIngredient ingredients={ingreArr}/>
        {ingreArr.length > 0? <GenerateRecipe recipeGen={getRecipe}/>:" "}

        {loading && (
          <div className="flex justify-center items-center mt-6">
            <div className="loader"></div>
            <p className="text-gray-600 text-sm ml-4">Fetching your recipe...</p>
          </div>
        )}

        {recipeShow!=""?<ClaudeRecipe recipeContent={recipeShow}/>:" "}
    </div>

    </section>
    
    
    
    
  
   
  )
}
