// function Cards({title,desc}){
//     return(<>
    
//     <div className="p-2 flex flex-col gap-y-3 rounded-md border-2 border-gray-400 ">
//         <h1 className="text-2xl text-gray-600 font-bold">{title}</h1>
//         <p className="text-xl text-blue-600">{desc}</p>
//     </div>
    
    
//     </>)
// }

// export default Cards

import React from 'react'
import Button from './Button'


export default function Cards({title,desc,btnText,link,price,listArr}) {

    return (
    <div className="p-2 flex flex-col gap-y-3 rounded-md border-2 border-gray-400 ">
         <h1 className="text-2xl text-gray-600 font-bold">{title}</h1>
         <p className="text-xl text-blue-600">{desc}</p>
         <Button text={btnText} link={link}/>
         <ul>
            {/* React need key attribute to differ b/w list items */}
       {/* {listArr.map((elementText)=> <li key={elementText}>{elementText}</li>)} */}

<li>{price>1350?<p>You got discount</p>:price}</li>
         </ul>
     </div>
  )
}
