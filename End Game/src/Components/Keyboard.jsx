import React, { useEffect, useState } from 'react'
// import Button from './KeyboardKey'
// import KeyboardKey from './KeyboardKey'

export default function Keyboard({word,guess,disabled}) {

const [matchletter,setMatchLetter] = useState(null);
useEffect(()=>{

},[])

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersArr = letters.split("");
const verifyStatus = (letter,event) =>{
  
  const target = event.target;
if(word.indexOf(letter) != -1){
target.style.backgroundColor = "green"
console.log(letter)
}

else {
    target.style.backgroundColor = "red"
    
}
}

const gameOver = disabled === "Game Over"

  return (
    <div className='flex flex-wrap gap-1.5 justify-center'>
      
{lettersArr.map((element,index) => {
return  <button onClick={(event)=>guess(element,event)} disabled = {game} className={`p-3 cursor-pointer w-10 h-10 text-black rounded-sm text-center ${matchletter?"bg-green-400":"bg-red-500"} bg-yellow-500`}>{element}</button>
})}
    </div>
  )
}
