import Button from "./Button"

function SearchContent(){

    return (
    <>
    <div className="flex flex-row gap-2 items-center">
    <input type="text" className="border-2 border-blue-300 outline-none focus:shadow-md text-blue-600 rounded-md px-2 py-1" placeholder="Search" />
    <Button text="Search"/>
    </div>
    </>
    )
    }

    export default SearchContent