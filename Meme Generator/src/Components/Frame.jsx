import React from 'react'
import memePhoto from "../assets/memePhoto.png"

export default function Frame(props) {

    const {topText, bottomText, imageUrl} = props.memeContent;

  return (

    <div className='relative'>
      <img src={imageUrl} className='h-64 aspect-video w-full' alt="" />
      <h1 className='absolute top-5 left-20  text-3xl font-black text-white '>{topText}</h1>
      <h1  className='absolute bottom-5 left-20 text-3xl font-black text-white'>{bottomText}</h1>
    </div>
  )
}
