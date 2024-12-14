import React, { useState } from 'react'
import Ticket from './Ticket';
import { generate, sum } from './helper';

export default function Lottery({n,winningSum}) {

const [ticket,setTicket] = useState(generate(n));
let isWinning = sum(ticket) === winningSum?"You Won":"Lose!!!";
  return (
    <>
      <h1 className='text-2xl text-blue-700 font-bold text-center'>Lottery Game!!!</h1>
      <p className='text-xl font-bold text-center mt-5'>{isWinning}</p>
      <Ticket numberArr={ticket}/>
      <button className='bg-blue-600 text-white px-2 py-1 rounded-md' onClick={()=> setTicket(generate(n))}>Re-Generate</button>
    </>
  
  )
}
