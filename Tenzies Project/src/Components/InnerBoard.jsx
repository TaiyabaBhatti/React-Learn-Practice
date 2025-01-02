import React from 'react'
import PlayArea from './PlayArea'
import DiceImage from "../assets/DiceImage.png"

export default function InnerBoard() {
  return (
    <div className='w-80   bg-white rounded-lg px-8 py-7 flex flex-col gap-y-6 justify-center'>
        
        
         <div className='flex flex-col items-center'>
         <img src={DiceImage} className="w-20 h-10 object-cover" alt="" />
        
        <h1 className='font-bold text-2xl text-center'>Tenzies</h1>
        <p className='font-normal text-xs text-center'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <PlayArea/>
    </div>
  )
}
