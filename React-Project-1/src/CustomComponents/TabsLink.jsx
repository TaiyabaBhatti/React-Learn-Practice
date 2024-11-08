import logo from "../logo.png"
function TabsLink(){

return (
<>
<ul className="flex flex-row gap-5 items-center">
<a href="#"><img src={logo} alt="logo" className="w-20 h-10 object-cover "/></a>
<li><a href="#" className="hover:text-blue-600 font-bold">Textutils</a></li>
<li><a href="#" className="hover:text-blue-600 font-bold">Home</a></li>
<li><a href="#" className="hover:text-blue-600 font-bold">About</a></li>
</ul>
</>
)
}

export default TabsLink