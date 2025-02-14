import React, { useEffect, useState } from 'react'
// import guessWord from './generateWord';
import Button from './Button';
import guessWord from './generateWord';


export default function WordScreen({word,}) {



  return (
    <div className='flex  gap-x-2 justify-center'>   
{word.map((element,index)=>{
return <Button text={element} isCorrect={false} key={index}/>
})}


    </div>
  )
}
