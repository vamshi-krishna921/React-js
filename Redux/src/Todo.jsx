import React, { use } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

function Todo() {
  const state = useSelector((state) => state.tasks);
  console.log(state);

  return (
    <div className="w-[40%] min-h-1/2 bg-gray-100 shadow-lg rounded-lg flex flex-col items-center justify-start gap-5 px-6 py-1.5">
      <h1 className="text-4xl font-bold text-blue-600">Todo App</h1>
      <div className="w-full h-10 flex justify-center items-center gap-3.5">
        <input
          type="text"
          placeholder="Add your task"
          className="border-2 rounded-lg border-blue-100 px-3 py-2 focus:outline-blue-400 w-[80%]"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Task
        </button>
      </div>
      <div className="w-full flex flex-col gap-3.5">
        {state.map((curTask, index) => (
          <div key={index} className="w-[95%] h-[10%] bg-gray-200 shadow shadow-gray-400 hover:bg-blue-500 hover:text-white flex items-center justify-between rounded-lg font-[500] px-5 py-4">
            <p className="text-lg">{index}</p>
            <p className="text-lg">{curTask}</p>
            <p className="text-xl cursor-pointer hover:text-red-600">
              <MdDelete />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
