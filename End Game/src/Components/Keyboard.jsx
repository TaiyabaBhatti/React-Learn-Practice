import React, { useEffect, useState } from 'react'
// import Button from './KeyboardKey'
// import KeyboardKey from './KeyboardKey'

export default function Keyboard({word}) {

const [matchletter,setMatchLetter] = useState(null);
useEffect(()=>{

},[])

const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
const verifyStatus = (letter,event) =>{
  const lowerLetter = letter.toLowerCase();
  const target = event.target;
  
  
if(word.indexOf(lowerLetter) != -1){
setMatchLetter()
target.style.backgroundColor = "green"
console.log(lowerLetter)
}

else {
    target.style.backgroundColor = "red"
    
}
}



  return (
    <div className='flex flex-wrap gap-1.5 justify-center'>
      
{letters.map((element,index) => {
return  <button onClick={(event)=>verifyStatus(element,event)} className={`p-3 cursor-pointer w-10 h-10 text-black rounded-sm text-center ${matchletter?"bg-green-400":"bg-red-500"} bg-yellow-500`}>{element}</button>
})}
    </div>
  )
}
