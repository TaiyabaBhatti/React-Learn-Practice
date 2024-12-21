import React from "react";
import GenerateRecipe from "./GenerateRecipe";

export default function DisplayIngredient(props) {

  return (
    props.ingredients.length > 0 && 
    <>
      <h1 className=" px-10 font-bold text-lg mt-9">INGREDIENTS ON HAND---</h1>
      <ul className=" mt-3 mb-8 flex flex-col gap-y-3  px-16 py-2 list-disc">
        {props.ingredients.map((items) => {
          return (
            <li
              key={items.key}
              className=" list-item text-gray-500
            "
            >
              <span>{items.ingredient}</span>
            </li>
          );
        })}
      </ul>
     
    </>
  );
}
