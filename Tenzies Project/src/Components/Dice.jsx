import React from 'react'

export default function Dice(prop) {
    // prop.value
    //prop.active  //false or true
    // #59E391 active color
  return (
    <button  className={`w-9 h-9 rounded font-bold text-xl text-center  ${prop.isHeld ? "bg-green-400" :"bg-white"} border-2`} onClick={()=>{prop.clicked(prop.id)}}>{prop.value}</button>
  )
}
