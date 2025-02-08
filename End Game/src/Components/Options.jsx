import React from 'react'

export default function Options() {

    const opts =[
        {text:"Html",
         color:"bg-orange-400" 
        },
        {text:"CSS",
            color:"bg-blue-700" 
           },
           {text:"Javascript",
            color:"bg-yellow-700" 
           },
           {text:"React",
            color:"bg-blue-500" 
           },
           {text:"Typescript",
               color:"bg-pink-300" 
              },
              {text:"Node.js",
               color:"bg-green-500" 
              },
              {text:"Python",
                color:"bg-yellow-500" 
               },
               {text:"Ruby",
                   color:"bg-red-500" 
                  },
                  {text:"Assembly",
                   color:"bg-blue-700" 
                  }
     ]





  return (
    
 <div className='flex flex-wrap gap-x-1 gap-y-2 justify-center'>
      
{opts.map((element,index) => {
return <span className={`p-2 ${element.color} rounded-sm text-center text-white`} key={index} >{element.text}</span>
}) }
    </div>







  )
}
