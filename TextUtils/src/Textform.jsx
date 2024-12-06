import React, { useState } from "react";
import Button from "./Button";

export default function Textform(props) {
  let [text, textChange] = useState("Enter Text");
  let updateUpper = () => {
    let newText = text.toUpperCase();
    textChange(newText);
  };
  let updateLower = () => {
    let newText = text.toLowerCase();
    textChange(newText);
  };
  let clear = () => {
    let newText = "";
    textChange(newText);
  };

  let handleChange = (event) => {
    textChange(event.target.value);
  };

  return (
    <div className="p-2 max-w-xl m-auto">
      <div className="flex flex-col gap-y-2 mb-3">
       
        <label htmlFor="exampleFormControlTextarea1" className="font-bold">
          Enter Your Text Below
        </label>
        <textarea
          className={`bg-${props.modeTheme?"white":"black"} text-${props.modeTheme?"black":"white"}  rounded-sm p-2 outline-none border-2 border-gray-300`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex flex-row gap-x-2">
        <Button text="ToUpperCase" click={updateUpper} />
        <Button text="ToLowerCase" click={updateLower} />
        <Button text="Clear" click={clear} />
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Text Summary:</h1>
        <p>
          <span className="font-bold">
            {text === "" ? 0 : text.split(" ").length}
          </span>{" "}
          Words,{" "}
          <span className="font-bold">
            {text.replace(/[,\.\s]/g, "").length}
          </span>{" "}
          Characters
        </p>
      </div>
    </div>
  );
}
