import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
  return (
  <header className="flex flex-row justify-between py-9 px-6">
    <div>
        <h1 className='font-black text-2xl'>#VANLIFE</h1>
    </div>
    <nav className='flex flex-row items-center gap-x-2.5 font-semibold text-base'>
     <Link to={'/about'}>About</Link>
     <Link>Vans</Link>
    </nav>
  </header>
  )
}
