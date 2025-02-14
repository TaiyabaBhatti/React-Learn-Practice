import { Link } from "react-router-dom"
function TabsLink(props){

return (
<>
<ul className={`flex flex-row gap-5 items-center  text-${props.textColor ? "blue-500": "white"}`}>

<li><Link to="/hero" className="font-bold">Textutils</Link></li>
<li><Link to="/about" className="font-bold">About</Link></li>
</ul>
</>
)
}

export default TabsLink