import Button from "./Button.jsx"
import TabsLink from "./TabsLink.jsx"


function Navbar(props){

return (
<>
<nav className={`bg-${props.mode?"white":"black"} px-5 py-3 m-auto  border-b-2   flex flex-row justify-between gap-3`}>
    <TabsLink textColor={props.mode}/>
    <button className={`border-2 p-3 text-${props.mode?"black":"lime-50"}`} onClick={props.toggle}>{props.switchText} Mode</button>
</nav>
</>
)

}

export default Navbar