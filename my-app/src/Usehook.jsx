import React from "react";
import { useState } from "react";

//* Begineer useState
// function Usehook() {
//   const [count, setCount] = useState(0);
//   function counter(){
//     setCount(count+1);
//   }
//   return (
    // <div className="w-[10%] h-[20dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
    //   <p className="text-2xl font-semibold text-black">{count == 0 ? "Count begins": count}</p>
    //   {/* <button onClick={() => {
    //     setCount(count + 1)
    //   }} className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-75">
    //     Click me
    //   </button> */}
    //   <button onClick={counter} className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-75 hover:shadow shadow-sky-900">
    //     Click me
    //   </button>
    // </div>
//   );
// }

//* useState using objects
function Usehook() {
  const [value,setValue] = useState({
    name: "Ganesh",
    isBoolean : false,
  })

  return (
     <div className="w-[10%] h-[20dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
      {/* Inline click event */}
      <p className="text-2xl font-semibold text-black">{value.isBoolean.toString()}</p>
      {/* <button onClick={()=>setValue({...value, isBoolean: !value.isBoolean})} className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900">
        Click me
      </button> */}
      {/* <button onClick={() => setValue({...value, isBoolean: !value.isBoolean})} className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900">
        Click me
      </button> */}
    </div>
  )
}

export default Usehook;
