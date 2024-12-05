import React from 'react'
import { useEffect,useState } from 'react'

export default function UseEffectTut() {

const [windowWidth, setWindowWidth] = useState(innerWidth);

const updateFunction = () => 
{
  setWindowWidth(window.innerWidth)
}

useEffect(()=>{
window.addEventListener("resize",updateFunction);

return () => {
  window.removeEventListener("resize", updateFunction);
  console.log("Unmount")
};

},[])





  return (
    <div>
      {windowWidth}
    </div>
  )
}
