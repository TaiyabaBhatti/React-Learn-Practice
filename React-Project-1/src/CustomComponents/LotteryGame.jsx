import React, { useState } from 'react'
import { generate, sum } from './helper'

export default function LotteryGame() {

const [ticket,setTicket] = useState(generate(3))
// const [target,setTarget] = useState(false)

let isWinning = sum(ticket) == 15?"Lottery Win": "You lose";






  return (
    <div>
      <h1 className='text-2xl text-blue-700 font-bold text-center'>Lottery Game!!!</h1>
      <p className='text-xl font-bold text-center mt-5'>{isWinning}</p>
      <div className='border-2 max-w-32 flex justify-evenly m-auto mt-28'>
        <span className='font-bold text-2xl border-r-2 pr-2'>{ticket[0]}</span>
        <span className='font-bold text-2xl border-r-2 pr-2'>{ticket[1]}</span>
        <span className='font-bold text-2xl'>{ticket[2]}</span>
      </div>
      <button className='bg-blue-600 text-white px-2 py-1 rounded-md' onClick={()=> setTicket(generate(3))}>Re-Generate</button>
    </div>
  )
}
