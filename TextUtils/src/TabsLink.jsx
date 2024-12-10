
function TabsLink(props){

return (
<>
<ul className={`flex flex-row gap-5 items-center  text-${props.textColor? "blue-500": "white"}`}>
<li><a href="#" className="font-bold">Home</a></li>
<li><a href="#" className="font-bold">Textutils</a></li>
<li><a href="#" className="font-bold">About</a></li>
</ul>
</>
)
}

export default TabsLink