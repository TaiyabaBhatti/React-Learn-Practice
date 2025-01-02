import React from "react";

export default function Dice(prop) {
  // prop.value
  //prop.active  //false or true
  // #59E391 active color

  const dots = new Array(prop.value).fill(1);
  

  return (
    <button
      aria-pressed={`Pressed: ${prop.isHeld ? "Yes" : "Not"}`}
      aria-label={`Die button: Value is: ${prop.value} State is: ${
        prop.isHeld ? "Active" : "Not Held"
      }`}
      className={`w-10 h-10 rounded font-bold text-xl text-center p-1 ${
        prop.isHeld ? "bg-green-400" : "bg-white"
      } border-2`}
      onClick={() => {
        prop.clicked(prop.id);
      }}
    >
      <div className={`grid ${prop.value===1 || prop.value===2 ?"grid-cols-1":"grid-cols-3"} gap-1 w-full h-full`}>
        {dots.map((_, index,arr) => (
          <span
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${arr.length%2===0?"bg-red-500":"bg-blue-700"} mx-auto my-auto`}
          ></span>
        ))}
      </div>
    </button>
  );
}
