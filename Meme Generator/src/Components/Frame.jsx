import React from 'react'
import memePhoto from "../assets/memePhoto.png"

export default function Frame() {
  return (
    <div>
      <img src={memePhoto} className='h-64 aspect-video w-full' alt="" />
    </div>
  )
}
