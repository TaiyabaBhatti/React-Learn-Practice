
import { useState } from 'react'
import About from './About'
import Hero from './Hero'
import './index.css'
import Navbar from './Navbar'
import AlertDialogue from './AlertDialogue'

function App() {

const [mode,setMode] =useState(true);
// const [showComponent,setShowComponent] =useState(true);
const [alert, setAlert] = useState(null);
//alert an object
const onDelete = () =>{
setAlert(null)
}


const UpdateAlert = (message, type) => {
    setAlert(
        {
            msg:message,
            typ:type
        }
    )
}


const toggleMode = () => {
if(mode){
// light mode is alreday enabled, now switch to dark
setMode(false);
document.body.style.backgroundColor="#828385";
UpdateAlert("Dark mode Enabled","success");
}

else{
    setMode(true);
    document.body.style.backgroundColor="white";
    UpdateAlert("Light mode Enabled","success");
}
}



 return (
<>
{/* <div>{showComponent && <AlertDialogue show={onDelete}/>}</div> */}
<AlertDialogue alert={alert} show={onDelete}/>
<Navbar mode={mode}  toggle={toggleMode}/>
<Hero mode={mode} showAlert = {UpdateAlert}/>
{/* <About/> */}
</>
 )
}

export default App
