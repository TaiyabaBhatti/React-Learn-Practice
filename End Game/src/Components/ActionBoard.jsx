import React, { useEffect, useState } from 'react'
import Options from './Options'
import WordScreen from './WordScreen'
import Keyboard from './Keyboard'
import guessWord from './generateWord'


export default function ActionBoard() {

const [word,setWord] = useState([]);
useEffect(()=>{
const wordArr = guessWord();
console.log(wordArr)
setWord(wordArr)

},[])


const verify = (letter) => {
console.log(letter)
}



  return (
   <>
{/* disable buttons */}
<Options/>
{/* Guess Number array */}
<WordScreen word={word}/>

{/* Game Keyboard */}
<Keyboard  word={word}/>
   
   </>
  )
}
