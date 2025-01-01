import React from 'react'
import PlayArea from './PlayArea'

export default function InnerBoard() {
  return (
    <div className='w-80 h-80 bg-white rounded-lg px-8 py-7 flex flex-col gap-y-6 justify-center'>
         <div>
        <h1 className='font-bold text-2xl text-center'>Tenzies</h1>
        <p className='font-normal text-xs text-center'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <PlayArea/>
    </div>
  )
}
