import React, { useState } from "react";
//* Importing cards from cards.jsx
import Cards from "./cards";
import Events from "./Events";
import Usehook from "./Usehook";
import Props from "./Props";

const App = () => {
  const data = [
    {
      name: "Ganesh",
      profession: "Artist",
      Image: "https://images.unsplash.com/photo-1563777389189-5e3564e5961c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Uday",
      profession: "Coder",
      Image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Arjun",
      profession: "Saviour",
      Image: "https://images.unsplash.com/photo-1622160973081-d8ae262b32c6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [val,setVal] = useState(data);
  const addFriends = (friendId) => {
     setVal((prev) =>{
      return prev.map((item,index) => {
        if(index == friendId){
          return {...item, friends: !item.friends}
        }
        return item;
      })
     })
  }
  return (
    //* using component from other file (component rendering)
    <main className="w-[100vw] min-h-screen flex justify-center items-center gap-4 flex-wrap bg-zinc-200">
      {/* <Cards /> */}
      {/* <Events/> */}
      {/* <Usehook/> */}
      {val.map((item,index) => (
        <Props name={item.name} key={index} id = {index} addFriends = {addFriends} profession = {item.profession} Image = {item.Image} checkFriends = {item.friends}/>
      ))}
    </main>
  );
};
//* App component call
export default App;

//* Component reusablility
const ComreUseability = () => {
  return (
    <div>
      <div className="w-[30%] h-[30%]">
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="This is an image"
          className="w-full h-full"
        />
      </div>
      <h1 className="text-2xl font-bold">ReactJs Learning</h1>
      <p>
        Components are independent and reusable bits of code. They serve the
        same purpose as JavaScript functions, but work in isolation and return
        HTML. Components come in two types, Class components and Function
        components, in this tutorial we will concentrate on Function components.
      </p>
    </div>
  );
};
