import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Button from "./components/Button";

function App() {
  let inputtext = useRef();
  const [task, setTask] = useState([]);
  console.log(task);
  function addTask() {
    task.push(inputtext.current.value);
    setTask([...task]);
    inputtext.current.value = "";
  }

  function removeTask(index) {
    console.log(index);
    task.splice(index, 1);
    setTask([...task]);
  }
  function editTask(index) {
    console.log(index);
    let ask = prompt("Edit the Task");
    task.splice(index, 1, ask);
    setTask([...task]);
  }

  return (
    <>
      <h1 className="text-center text-[2rem] mt-40">ToDo App</h1>
      <div className="flex justify-center gap-8 mt-16">
      <input type="text" placeholder="Enter the Task !" className="input input-bordered w-full max-w-xs " ref={inputtext}/>
      <Button click={addTask} heading="Add it !"/></div>
      <ul className="">
        {task.map((item, index) => {
          console.log(index);
          return (
            <li key={index} className="flex mt-5 justify-center gap-5 align-middle">
              {item}
              <button onClick={() => removeTask(index)}><Button remove="Remove it !"/></button>
              <button onClick={() => editTask(index)}><Button edit="Edit it !"/></button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
