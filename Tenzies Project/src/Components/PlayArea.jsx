import React from 'react'
import Dice from './Dice';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Confetti from "react-confetti"

export default function PlayArea() {

    const [diceArr, setDiceArr] = useState(generateNumbers);
let status = useRef(false);
let focusRef = useRef(null);


useEffect(()=>{

if(status.current){
    focusRef.current.focus()
}


},[status.current])

if(diceArr.every(obj => obj.isActive) && diceArr.every(obj => obj.value === diceArr[3].value) ){
    status.current = true;
}








function generateNumbers(){



return new Array(10).fill(0).map( (number,index) => { return {value:Math.floor(1+ Math.random()*7), isActive:false, uqId:index}});
}


const reGenerate = () => {

if(status.current){
    status.current=false
 setDiceArr(generateNumbers())
}

else{
    setDiceArr((prevArr) => {
        return prevArr.map((diceObj) => {
        if(!diceObj.isActive){
        return {...diceObj,value:Math.ceil(1 + Math.random()*7)}
        }
        return {...diceObj}
        })
        })
    }

}

const makeLocked = (id) => {



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
{status.current && <Confetti width={350} height={384}></Confetti>}
<div aria-live='polite' className='sr-only'>
{status.current && <p>WE WON. Press the Button to Restart</p>}

</div>

<div className='grid grid-cols-5 gap-2'>
{
 diceArr.map((obj) => {  return <Dice key={obj.uqId} id={obj.uqId} value={obj.value} isHeld={obj.isActive} clicked={makeLocked}/>})    
        }
</div>

<button ref={focusRef} className='bg-purple-900 rounded-sm px-3 py-1  text-white font-medium text-center self-center' onClick={reGenerate}>{status.current? "You Won! Restart?":"Roll"}</button>
</>


  )
}
