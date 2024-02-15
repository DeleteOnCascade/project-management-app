import { useState, useRef } from "react";

export default function ProjectInfo({ project, addTasks }) {
  const tasksRef = useRef(new Array());
  const inputTasksValue = useRef();
  const [tasks, setTasks] = useState([null]);

  function addTasks() {
    const newTask = inputTasksValue.current.value;
    //tasksRef.current.push(inputTasksValue.current.value);
    setTasks((prevTasks) => [...prevTasks, newTask]);
    inputTasksValue.current.value = "";
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
        <p className="text-stone-600 mb-4">{project.date}</p>
        <p className="mt-8">{project.desc}</p>

        <h2 className="text-xl font-bold text-stone-500 my-4">Tasks</h2>
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" ref={inputTasksValue} />
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={() => addTasks()}
        >
          Add task
        </button>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task, index) => (
            <li className="flex justify-between my-4" key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
