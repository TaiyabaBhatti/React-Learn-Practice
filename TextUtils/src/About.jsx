import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function About() {

    let [mytheme,themeState] = useState(
         {
        backgroundColor : "white",
        color:"black"
    })

    let [btnText,btnState] =useState("Enable Dark Mode")
    const toggleTheme = () => {

        if(mytheme.backgroundColor === "white"){
            themeState(
                {
               backgroundColor : "black",
               color:"white"
           })
            btnState("Disable Dark Mode")
        }
        else {
            themeState(
                {
               backgroundColor : "white",
               color:"black"
           })
            btnState("Enable Dark Mode")
        }

    }


  return (
    <section className="my-10  p-5 m-auto max-w-7xl shadow-gray-300 shadow-md" style={mytheme}>
      <h1 className="font-bold text-4xl text-center">Features we cover</h1>

      <div className="mb-5">
        <div className="border-2 p-3 mt-10">
          <h2 className="font-bold text-2xl">Data Generation</h2>
          <div className="mt-5">
            <p>
              TextUtils can help you generate text or numbers. Data can be
              generated from the preloaded dictionary, random characters, or
              random numbers.
            </p>
          </div>
        </div>
        <div className="border-2 p-3 mt-10">
          <h2 className="font-bold text-2xl">Number Formatting</h2>
          <div className="mt-5">
            <p>
              TextUtils also offer basic formatting of numbers like adding a
              comma separator, decimal, rounding numbers etc.
            </p>
          </div>
        </div>
        <div className="border-2 p-3 mt-10">
          <h2 className="font-bold text-2xl">Clean Up Data</h2>
          <div className="mt-5">
            <p>
              Cleaning up your data is also a breeze. Duplicate data removal per
              line, removing any unseen whitespace, removing empty lines or just
              trimming each line of excess space.
            </p>
          </div>
        </div>
      </div>

      <Button text={btnText} click={toggleTheme} />
    </section>
  );
}
