
import { useState } from 'react'
import About from './About'
import Hero from './Hero'
import './index.css'
import Navbar from './Navbar'
import AlertDialogue from './AlertDialogue'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

const [mode,setMode] =useState(true);
// const [showComponent,setShowComponent] =useState(true);
const [alert, setAlert] = useState(null);
//alert an object
const UpdateAlert = (message, type) => {
    setAlert(
        {
            msg:message,
            typ:type
        }
    )
    setTimeout(() => {
        setAlert(null)
    }, 3000);
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
    // title is the direct property of document object
    document.title = "Light mode"
}
}



 return (
<Router>

<AlertDialogue alert={alert}/>
<Navbar mode={mode}  toggle={toggleMode}/>
<Routes>
          <Route path="/hero" element={  <Hero mode={mode} showAlert = {UpdateAlert}/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
</Router>
 )
}

export default App
