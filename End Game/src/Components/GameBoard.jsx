import React, { useEffect, useState } from 'react'


import Options from './Options'
import Keyboard from './Keyboard'
import WordScreen from './WordScreen'
import guessWord from './generateWord';
import Button from './Button';
import { languages } from './language'

export default function GameBoard({word}) {

 
  const [guessLetters,setGuessLetters] = useState([]);
  const [guessCount,setGuessCount] = useState(0);
  const [display,setDisplay] = useState("Game Start");

  useEffect(()=>{
    if(guessCount === 8){
setDisplay("Game Over");
console.log("Game Over");

    }

    },[guessCount])


 
  
  const verifyStatus = (letter,event) =>{
  const target = event.target;
  if(word.indexOf(letter) != -1){

  target.style.backgroundColor = "green"

  }
  
  else {
    setGuessCount(prevCount => prevCount += 1)
    target.style.backgroundColor = "red";
    
      
  }
  }
  
  

const storeLetter = (letter,event) =>{


  setGuessLetters(prevArr => {
    const uniqueSet = new Set(prevArr);
    uniqueSet.add(letter);
return [...uniqueSet]
  }
  )

  verifyStatus(letter,event)




}











  return (
    <section className='py-20 px-14 bg-black h-screen flex flex-col gap-y-9'>

        {/* Game Details */}
      <div className='text-center'>
<h1 className='font-medium text-2xl text-white '>Assembly: Endgame</h1>
<p className='text-gray-600'>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
     
     {/* Game status */}
     <p className='text-white'>
      Guess Make: {guessCount} 
      <br></br>
      Status: {display}
     </p>
     

      </div>
<div className='flex flex-wrap gap-x-1 gap-y-2 justify-center'>
      
{languages.map((element,index) => {
  const status = index < guessCount;
return <span  className={`p-2 ${element.color} ${status?"line-through":""}  rounded-sm text-center text-white`} key={index} >{element.text}</span>
}) }
    </div>

{/* Guess Number array */}

 <div className='flex  gap-x-2 justify-center'>   
{word.map((element,index)=>{
  const status = (word.indexOf(element) != -1) && guessLetters.includes(element) ? true : false;
  // if(!status){
  //   setGuessCount(prevCount => prevCount++)
  // }
return <Button text={element} isCorrect={status} key={index}/>
})}


    </div>




{/* Game Keyboard */}
<Keyboard  word={word} guess={storeLetter} disabled ={display}/>
    </section>
  )
}
