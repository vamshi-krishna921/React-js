import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

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
// function Usehook() {
//   const [value, setValue] = useState({
//     name: "Ganesh",
//     isBoolean: false,
//   });

//   return (
//     <div className="w-[10%] h-[20dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       {/* Inline click event */}
//       <p className="text-2xl font-semibold text-black">
//         {value.isBoolean.toString()}
//       </p>
//       {/* <button onClick={()=>setValue({...value, isBoolean: !value.isBoolean})} className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900">
//         Click me
//       </button> */}
//       <button
//         onClick={() => setValue({ ...value, isBoolean: !value.isBoolean })}
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

// * Mastering useHook adding one more info to object
// function Usehook() {
//   const [value, setValue] = useState({
//     name: "Ganesh",
//     isBoolean: false,
//   });

//   return (
//     <div className="w-[10%] h-[20dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       <p className="text-2xl font-semibold text-black">
//         {value.isBoolean.toString()}
//       </p>
//       <button
//         onClick={() => {
//           setValue({ ...value, gender: "Male" });
//           console.log(value);
//         }}
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

//* Deleting values in an array using useState
// function Usehook() {
//   const [value, setValue] = useState([1,2,3,4,5,6]);

//   return (
//     <div className="w-[10%] h-[35dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       <p className="text-2xl font-light text-black">
//         {value.map((elem) =>{
//           return <p>{elem}</p>
//         })}
//       </p>
//       <button
//       onClick={()=>setValue(()=>{
//        return value.filter((item,index) => {
//          return index<value.length-1;
//         })
//       })}
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

//* Deleteing particular elem in array using useHook
// function Usehook() {
//   const [value, setValue] = useState([1,2,3,4,5,6]);

//   return (
//     <div className="w-[10%] h-[35dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       <p className="text-2xl font-light text-black">
//         {value.map((elem) =>{
//           return <p>{elem}</p>
//         })}
//       </p>
//       <button
//       onClick={()=>setValue(()=>{
//        return value.filter((item,index) => {
//          return item!=3;
//         })
//       })}
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

//* Deleting elem in array which are not %2 using useHook
// function Usehook() {
//   const [value, setValue] = useState([1, 2, 3, 4, 5, 6]);

//   return (
//     <div className="w-[10%] h-[35dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       <p className="text-2xl font-light text-black">
//         {value.map((elem) => {
//           return <p>{elem}</p>;
//         })}
//       </p>
//       <button
//         onClick={() =>
//           setValue(() => {
//             return value.filter((item) => {
//               return item % 2 !== 0;
//             });
//           })
//         }
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

//* Performing addition with elem in array using useHook
// function Usehook() {
//   const [value, setValue] = useState([1,2,3,4,5,6]);

//   return (
//     <div className="w-[10%] h-[35dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       <p className="text-2xl font-light text-black">
//         {value.map(item => <p>{item}</p>)}
//       </p>
//       <button
//       onClick={() => {
//         setValue(() => {
//           return value.map(item => {
//             return item + 1;

//           })
//         })
//       }}
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

//* Adding an elem at end of array using useHook
// function Usehook() {
//   const [value, setValue] = useState([1,2,3,4,5,6]);

//   return (
//     <div className="w-[10%] h-[35dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       <p className="text-2xl font-light text-black">
//         {value.map(item => <p>{item}</p>)}
//       </p>
//       <button
//       onClick={() => {
//         setValue(() => [...value,7])
//       }}
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }
//* Performing addition with elem in array using useHook
// function Usehook() {
//   const [value, setValue] = useState([1,2,3,4,5,6]);

//   return (
//     <div className="w-[10%] h-[35dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       <p className="text-2xl font-light text-black">
//         {value.map(item => <p>{item}</p>)}
//       </p>
//       <button
//       onClick={() => {
//         setValue(() => {
//           return value.map(item => {
//             return item + 1;

//           })
//         })
//       }}
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

//* Changigng objects in array using useHook
// function Usehook() {
//   const [value, setValue] = useState([
//     {
//       name : "Ganesh",
//       age: 20,
//     },
//      {
//       name : "Jai",
//       age: 23,
//     },
//      {
//       name : "Hanuman",
//       age: 22
//     }
//   ]);

//   return (
//     <div className="w-[10%] h-[35dvh] rounded bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow shadow-zinc-200">
//       <p className="text-2xl font-light text-black">
//        {value.map((item,index) => {
//         return <div key={index}>
//           <p>{item.name}</p>
//           <p>{item.age}</p>
//         </div>
//        })}
//       </p>
//       <button onClick={() => {
//         setValue(prev =>{ return prev.map((item) => {
//         return item.name === "Jai" ? ({name: "Jai", age: 25}) : item
//         } )})
//       }}
//         className="px-4.5 py-2.5 bg-sky-400 text-xl rounded hover:transform-translate hover:-translate-y-0.5 duration-100 hover:shadow shadow-sky-900"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

//Todo Image slider using useState hook
function Usehook() {
  const [val, setVal] = useState(false);
  return (
    <div className="relative w-[30vw] h-[40vh] bg-zinc-500 rounded-md flex overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className={`w-full h-full object-cover shrink-0 transition-transform ${!val? "-translate-x-[0%]" : "-translate-x-[100%]"}`}
      />
      <img
        src="https://images.unsplash.com/photo-1503416997304-7f8bf166c121?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className={`w-full h-full object-cover shrink-0 transition-transform ${!val? "-translate-x-[0%]" : "-translate-x-[100%]"} `}
      />
      <div
        onClick={() =>
          setVal(() => {
            return !val;
          })
        }
        className="absolute bottom-2 left-[40%] size-15 rounded-full bg-zinc-300/40 flex justify-center items-center"
      >
        <FaArrowRight />
      </div>
    </div>
  );
}

export default Usehook;
