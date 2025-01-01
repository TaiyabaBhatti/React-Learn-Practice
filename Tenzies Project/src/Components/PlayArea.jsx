import React from 'react'
import Dice from './Dice';
import { useState } from 'react';

export default function PlayArea() {

    const [diceArr, setDiceArr] = useState(generateNumbers);



function generateNumbers(){
return new Array(10).fill(0).map( (number,index) => { return {value:Math.floor(Math.random()*7), isActive:false, uqId:index}});
}


const reGenerate = () => {

    setDiceArr((prevArr) => {
        return prevArr.map((diceObj) => {
        if(!diceObj.isActive){
        return {...diceObj,value:Math.floor(Math.random()*7)}
        }
        return {...diceObj}
        })
        })

}

const makeLocked = (id) => {

console.log("Locked")


setDiceArr((prevArr) => {

return prevArr.map((diceObj) => {

if(diceObj.uqId == id){

return {...diceObj,isActive:!diceObj.isActive}

}

return {...diceObj}



})


})

}


  return (

<>
<div className='grid grid-cols-5 gap-2'>
{
 diceArr.map((obj) => {  return <Dice key={obj.uqId} id={obj.uqId} value={obj.value} isHeld={obj.isActive} clicked={makeLocked}/>})    
        }
</div>

<button className='bg-purple-900 rounded-sm px-3 py-1 w-20 text-white font-medium text-center self-center' onClick={reGenerate}>Roll</button>
</>


  )
}
