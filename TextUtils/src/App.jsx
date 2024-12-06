
import { useState } from 'react'
import About from './About'
import Hero from './Hero'
import './index.css'
import Navbar from './Navbar'

function App() {

const [mode,setMode] =useState(true);
const [text,setText] =useState("Light");

const toggleMode = () => {

if(mode){
// light mode is alreday enabled, now switch to dark
setMode(false);
setText("Dark")
}

else{
    setMode(true);
    setText("Light")
}


}



 return (
<>
<Navbar mode={mode}  toggle={toggleMode} switchText= {text}/>
<Hero mode={mode}/>
{/* <About/> */}
</>
 )
}

export default App
