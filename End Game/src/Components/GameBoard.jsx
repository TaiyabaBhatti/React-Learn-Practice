import React from 'react'

import ActionBoard from './ActionBoard'

export default function GameBoard() {
  return (
    <section className='py-20 px-14 bg-black h-screen flex flex-col gap-y-9'>

        {/* Game Details */}
      <div className='text-center'>
<h1 className='font-medium text-2xl text-white '>Assembly: Endgame</h1>
<p className='text-gray-600'>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </div>

<ActionBoard/>

    </section>
  )
}
