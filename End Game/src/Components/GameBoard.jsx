import React, { useEffect, useState } from 'react'


import Options from './Options'
import Keyboard from './Keyboard'
import WordScreen from './WordScreen'
import guessWord from './generateWord';

export default function GameBoard() {

  const [word,setWord] = useState([]);
  const [guessLetters,setGuessLetters] = useState([])

  console.log(guessLetters)

  useEffect(()=>{
  const wordArr = guessWord();
  console.log(wordArr)
  setWord(wordArr)
  
  },[])
  
  const verifyStatus = (letter,event) =>{
  
    const target = event.target;
  if(word.indexOf(letter) != -1){

  target.style.backgroundColor = "green"

  }
  
  else {
      target.style.backgroundColor = "red"
      
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
      Status: TBS
     </p>
     
      </div>
<Options/>
{/* Guess Number array */}
<WordScreen word={word}/>

{/* Game Keyboard */}
<Keyboard  word={word} guess={storeLetter}/>
    </section>
  )
}
