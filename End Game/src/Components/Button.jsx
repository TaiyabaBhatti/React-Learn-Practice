import React from 'react'

export default function Button({text,isCorrect}) {
  return (
    <button className={`p-2 cursor-pointer w-10 h-10  rounded-sm text-center bg-gray-700 border-b-2  ${isCorrect?"text-white":"text-gray-700"} border-b-white`}>{text}</button>
  )
}
