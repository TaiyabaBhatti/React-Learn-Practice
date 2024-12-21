import React from 'react'

export default function InputElement({inputText,Onhandler}) {
  return (
    <input type="text" value={inputText} aria-label='Add Ingredients' onChange={Onhandler} placeholder='e.g. oregano' className='outline-none border-2 rounded-sm px-3 py-1 w-80 flex-grow'/>
  )
}
