function Cards({title,desc}){
    return(<>
    
    <div className="p-2 flex flex-col gap-y-3 rounded-md border-2 border-gray-400 ">
        <h1 className="text-2xl text-gray-600 font-bold">{title}</h1>
        <p className="text-xl text-blue-600">{desc}</p>
    </div>
    
    
    </>)
}

export default Cards