
function TabsLink(props){

return (
<>
<ul className="flex flex-row gap-5 items-center">
<li><a href="#" className={`text-${props.textColor?"blue-500":"white"}  font-bold`}>Home</a></li>
<li><a href="#" className={`text-${props.textColor?"blue-500":"white"}  font-bold`}>Textutils</a></li>
<li><a href="#" className={`text-${props.textColor?"blue-500":"white"}  font-bold`}>About</a></li>
</ul>
</>
)
}

export default TabsLink