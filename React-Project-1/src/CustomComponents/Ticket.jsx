import React from 'react'
import TicketNum from './TicketNum'

export default function Ticket({numberArr}) {
  return (
  
    <div className='border-2 max-w-32 flex justify-evenly m-auto mt-28'>
{numberArr.map((ticketNum,index) => {
    return <TicketNum num={ticketNum} key={index}/>
    })}
    </div>
   
  
  )
}
