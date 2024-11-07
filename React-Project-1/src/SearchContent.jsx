function SearchContent(){

    return (
    <>
    <div className="flex flex-row gap-2 items-center">
    <input type="text" className="border-2 border-blue-300 outline-none focus:shadow-md text-blue-600 rounded-md px-2 py-1" placeholder="Search" />
    <button className="border-2 border-gray-300 text-gray-300 px-3 p-1 rounded-md hover:border-green-600 hover:bg-green-600 hover:text-white transition-all duration-150">Search</button>
    </div>
    </>
    )
    }

    export default SearchContent