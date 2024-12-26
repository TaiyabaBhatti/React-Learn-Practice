import React from 'react'

export default function Form() {

const handleSubmit = (event) => {
event.preventDefault();
}


  return (
   <form action="" onSubmit={handleSubmit} className='flex flex-col gap-y-8 mb-8'>

<div className='flex flex-row gap-x-10 justify-between'>
<div className='flex flex-col gap-y-1'>
    <label htmlFor="top-text" className='font-medium text-sm text-gray-700'>Top text</label>
    <input id='top-text' type="text" placeholder='Shut up' className='outline-none text-gray-500 w-56 rounded border-[0.82px] px-2 py-1 bg-white' />
</div>

<div className='flex flex-col gap-y-1'>
    <label htmlFor="bottom-text" className='font-medium text-sm text-gray-700'>Bottom text</label>
    <input id='bottom-text' type="text"  placeholder='And take my money' className='outline-none text-gray-500 w-56 rounded border-[0.82px] px-2 py-1 bg-white' />
</div>
</div>

<button type="submit" className='bg-purple-700 rounded-md py-2 px-2 text-white text-base font-bold'>Get a new meme image</button>
   </form>
  )
}
