import React from 'react'
import Form from './Form'
import Frame from './Frame'
import { useState, useEffect } from 'react'


export default function Hero() {

const [meme, setMeme] = useState({topText:"One does not simply", bottomText:"Walk into Mordor", imageUrl:"https://i.imgflip.com/1bij.jpg"})

const [allMemes, setAllMemes] = useState([]);


// useEffect(async ()=>{

// const response = await fetch("https://api.imgflip.com/get_memes");

// .then(data => {

// const memes = data.data.memes;
// // const firstText=;
// // const secondText=;


// setMeme({topText:memes[0].name, bottomText:"Walk into Mordor", imageUrl:memes[0].url})



// })
// },[])






const inputsHandle = (event) => {

    const {value,name} = event.currentTarget;
setMeme(prev=> ({...prev, [name]:value
}))

}

  return (
    <section className='px-9 my-10'>
    <Form  handler={inputsHandle} topText={meme.topText} bottomText={meme.bottomText} />
    <Frame memeContent={meme}/>
    </section>
  )
}
