import React, { useState } from "react";
import { use } from "react";

export default function FormCom() {
  const [data, setElementData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  // const typing = (event) => {

  // let data = event.target.value;

  // setFirstName(data);

  // }

  const handler = (event) => {
    let fieldName = event.target.name;
    let fieldVal = event.target.value;
    setElementData((preData) => {
        // preData[fieldName] = event.target.value;
        // return {...preData}
        return {...preData,[fieldName]:fieldVal}
    })
  };

  const preventDefault = (event) => {
event.preventDefault();
setElementData({firstName:"",lastName:"",age:0})
  }

  return (
    <form action="" onSubmit={preventDefault} className="bg-gray-400 px-3 py-1">
      <div>
        <label htmlFor="first-name"></label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter FirstName"
          className="border-2"
          value={data.firstName}
          onChange={handler}
          id="first-name"
        />
      </div>
      <div>
        <label htmlFor="last-name"></label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter LastName"
          className="border-2"
          value={data.lastName}
          onChange={handler}
          id="last-name"
        />
      </div>
      <div>
        <label htmlFor="age"></label>
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          className="border-2"
          value={data.age}
          onChange={handler}
          id="age"
        />
      </div>

      <br />
      <br />
      <button className="bg-blue-500 text-white font-bold p-2">Submit</button>
    </form>
  );
}
