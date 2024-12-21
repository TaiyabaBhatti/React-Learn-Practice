import React, { useState } from 'react'
import Button from './Button'
import InputElement from './InputElement'

export default function InputListBlock({inputText,Onhandler,addItem,preventDef}) {

  return (

    <form onSubmit={preventDef} className='mt-5 px-10 py-2 flex flex-row justify-center gap-2'>
      <InputElement inputText={inputText} Onhandler={Onhandler}/>
      <Button  addIngre={addItem}/>
    </form>


  )
}
