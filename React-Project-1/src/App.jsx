
import './index.css'
// import Header from "./mainheader.jsx"
// import TabsLink  from './headerTabs'
import Navbar from './CustomComponents/Navbar.jsx'
import Hero from './CustomComponents/Hero.jsx'
import Counter from './CustomComponents/Counter.jsx'
import Counter2 from './CustomComponents/Counter2.jsx'
import { useEffect, useState } from 'react'

// function App() {
//  return (
// <>
// <Navbar/>
// {/* <Hero/> */}
// {/* <Counter2/> */}
// {/* <Counter/> */}
// </>
//  )
// }

export default function App() {

const [resourceType, setResourceType] = useState("posts");
let [data, setData]=useState([]);
useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
.then(response => response.json())
.then(json => setData(json))
},[resourceType])

  return (
    <>
    <div>  
<button className='mx-1 bg-slate-400 px-2' onClick={() => setResourceType("Posts")}>Posts</button>
<button className='mx-1 bg-slate-400 px-2' onClick={() => setResourceType("Users")}>Users</button>
<button className='mx-1 bg-slate-400 px-2' onClick={() => setResourceType("Comments")}>Comments</button>
    </div>
    <h1 className='mt-2 text-xl font-bold'>{resourceType}</h1>
    {data.map((item)=> {return <h1>{JSON.stringify(item)}</h1>})}
    </>
  )

}

