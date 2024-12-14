import React, { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [newItem, setNewItem] = useState("");
  const [todosArr, setArr] = useState([]);

  const addItem = () => {
    if (newItem === "") {
      return;
    }

    setArr((prev) => {
      return [...prev, { task: newItem, key: uuidv4(),isDone:false }];
    });

    setNewItem("");
  };
  const handleInput = (event) => {
    let inputValue = event.target.value;
    setNewItem(inputValue);
  };
  // delteting by creting copy of array then filtering those elements we only want
  const deletItem = (unId) => {
    setArr((prev) => {
      return [...prev.filter((item) => item.key != unId)];
    });
  };

  const updateAllListItems = () => {
    setArr(
      todosArr.map((item) => {
        return { ...item, task: item.task.toUpperCase() };
      })
    );
  };

  const updateSpecific = (id) => {
   setArr((preArr) => {
    return preArr.map((item) => {

        if(item.key === id){
            return {...item,task:item.task.toUpperCase()}
        }

        else{
            return item
        }

    })
   }
  )

  };

const taskDone = (id) => {
    setArr((preArr) => {
        return preArr.map((item) => {
    
            if(item.key === id){
                return {...item,isDone:item.isDone=true}
            }
    
            else{
                return item
            }
    
        })
       }
      )


}


  return (
    <div className="m-auto py-2 px-3 w-fit mt-6 bg-gray-400">
      <div className="flex gap-x-2 place-content-center">
        <input
          type="text"
          value={newItem}
          onChange={handleInput}
          className="outline-none px-2"
        />
        <button
          className="rounded-md
     bg-blue-600 px-5 py-1 text-white active:scale-105 transition-all duration-200"
          onClick={addItem}
        >
          Add
        </button>
        <button
          className="rounded-md
     bg-blue-600 px-5 py-1 text-white active:scale-105 transition-all duration-200"
          onClick={updateAllListItems}
        >
          UpdateAll
        </button>
      </div>
      <TodoDisplay
        listItems={todosArr}
        remove={deletItem}
        update={updateSpecific}
        done={taskDone}
      />
    </div>
  );
}
