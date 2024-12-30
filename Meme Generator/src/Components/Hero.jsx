import React from 'react'
import Form from './Form'
import Frame from './Frame'
import { useState, useEffect } from 'react'


export default function Hero() {

const [meme, setMeme] = useState({topText:"One does not simply", bottomText:"Walk into Mordor", imageUrl:"https://i.imgflip.com/1bij.jpg"})

const [allMemes, setAllMemes] = useState([]);


useEffect(()=>{
  
const fetchMemes= async ()=>{
const response = await fetch("https://api.imgflip.com/get_memes");
const memesData = await response.json();
setAllMemes(memesData.data.memes);
}

fetchMemes();
},[])


const getMeme = () =>{

const randomIndex = Math.floor(Math.random() * allMemes.length);
const newMeme = allMemes[randomIndex];
const text = newMeme.name;
const length = text.length; 
const textOne = text.slice(0,length/2+1);
const textTwo = text.slice(length/2,length+1);

// console.log(text,text)

setMeme((prev)=>{
return {...prev,topText:textOne,bottomText:textTwo,imageUrl:newMeme.url}
})


}





const inputsHandle = (event) => {
    const {value,name} = event.currentTarget;
setMeme(prev=> ({...prev, [name]:value
}))

}

  return (
    <section className='px-9 my-10'>
    <Form  handler={inputsHandle} topText={meme.topText} bottomText={meme.bottomText} getClick={getMeme} />
    <Frame memeContent={meme}/>
    </section>
  )
}
