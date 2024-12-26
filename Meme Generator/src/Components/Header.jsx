import React from 'react'
import logo from "../assets/logo.png"
export default function Header() {
  return (
  <header className='px-9 bg-purple-700 py-4 w-full '>
    <div className='flex flex-row gap-x-3'>
        <img src={logo} alt="" className='w-8 object-contain'/>
        <h1 className='text-xl font-serif font-bold text-white'>Meme Generator</h1>
    </div>
  </header>
  )
}
