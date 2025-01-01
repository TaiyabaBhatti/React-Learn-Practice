import React from 'react'
import PlayArea from './PlayArea'
import InnerBoard from './InnerBoard'

export default function TenziesBoard() {
  return (
   <div className='w-fit relative top-10 h-96 px-5 py-7 bg-black m-auto'>
    <InnerBoard/>
   </div>
  )
}
