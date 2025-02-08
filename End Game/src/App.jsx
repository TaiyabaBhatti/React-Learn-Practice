import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GameBoard from './Components/GameBoard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <GameBoard/>
    </>
  )
}

export default App
