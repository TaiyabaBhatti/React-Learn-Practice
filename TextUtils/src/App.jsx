
import { useState } from 'react'
import About from './About'
import Hero from './Hero'
import './index.css'
import Navbar from './Navbar'
import AlertDialogue from './AlertDialogue'

function App() {

const [mode,setMode] =useState(true);
const [text,setText] =useState("Light");
const [showComponent,setShowComponent] =useState(true);

const onDelete = () =>{

if(true){
setShowComponent(false);
}

else{
    setShowComponent(true);
}
}




const toggleMode = () => {

if(mode){
// light mode is alreday enabled, now switch to dark
setMode(false);
setText("Dark")
document.body.style.backgroundColor="#828385";
}

else{
    setMode(true);
    setText("Light")
    document.body.style.backgroundColor="white";
}
}



 return (
<>
<AlertDialogue show={onDelete}/>
<Navbar mode={mode}  toggle={toggleMode} switchText= {text}/>
<Hero mode={mode}/>
{/* <About/> */}
</>
 )
}

export default App
