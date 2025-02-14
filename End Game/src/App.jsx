import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GameBoard from './Components/GameBoard'
import guessWord from './Components/generateWord'


function App() {
  const [count, setCount] = useState(0)
  const [word,setWord] = useState([]);

  useEffect(()=>{
    const wordArr = guessWord();
    console.log(wordArr)
    setWord(wordArr)
    },[])
  return (
    <>
     
    <GameBoard word={word}/>
    </>
  )
}

export default App
