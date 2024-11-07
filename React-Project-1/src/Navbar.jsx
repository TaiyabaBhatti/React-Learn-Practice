import TabsLink from "./TabsLink.jsx"
import SearchContent from "./SearchContent.jsx"

function Navbar(){

return (
<>
<nav className="px-5 py-3 m-auto max-w-7xl border-b-2   flex flex-row justify-between gap-3">
    <TabsLink/>
    <SearchContent/>
</nav>
</>
)

}

export default Navbar