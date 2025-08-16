import React, { useState } from "react";
//* Importing cards from cards.jsx
import Cards from "./cards";
import Events from "./Events";
import Usehook from "./Usehook";
import Props from "./Props";
import AddtoFav from "./AddtoFav";
import Navbar from "./Navbar";

const App = () => {
  // const data = [
  //   {
  //     name: "Ganesh",
  //     profession: "Artist",
  //     Image: "https://images.unsplash.com/photo-1563777389189-5e3564e5961c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  //   {
  //     name: "Uday",
  //     profession: "Coder",
  //     Image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  //   {
  //     name: "Arjun",
  //     profession: "Saviour",
  //     Image: "https://images.unsplash.com/photo-1622160973081-d8ae262b32c6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  // ];

  //AddtoFav music player data
  const data = [
    {
      name: "Ganesh",
      Song: "Jai ganesha",
      Image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addFav: false,
    },
    {
      name: "Shiva",
      Song: "Destroyer",
      Image:
        "https://images.unsplash.com/photo-1615438890269-65b569062819?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addFav: false,
    },
    {
      name: "Hanuman",
      Song: "Strength",
      Image:
        "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addFav: false,
    },
    {
      name: "Ganesh",
      Song: "Jai ganesha",
      Image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addFav: false,
    },
    {
      name: "Shiva",
      Song: "Destroyer",
      Image:
        "https://images.unsplash.com/photo-1615438890269-65b569062819?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addFav: false,
    },
    {
      name: "Hanuman",
      Song: "Strength",
      Image:
        "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addFav: false,
    },
  ];

  const [value, setValue] = useState(data);
  const handleFav = (favId) => {
    setValue((prev) => {
      return prev.map((item,index) => {
       if(index == favId){
         return {...item, addFav: !item.addFav}
       }
       return item;
      })
    })
  };

  // const [val, setVal] = useState(data);
  // const addFriends = (friendId) => {
  //   setVal((prev) => {
  //     return prev.map((item, index) => {
  //       if (index == friendId) {
  //         return { ...item, friends: !item.friends };
  //       }
  //       return item;
  //     });
  //   });
  // };
  return (
    //* using component from other file (component rendering)
    <main className="w-[100vw] h-screen flex justify-center items-center gap-4 flex-wrap bg-zinc-200 overflow-x-hidden">
      {/* <Cards /> */}
      {/* <Events/> */}
      {/* <Usehook/> */}
      {/* {val.map((item,index) => (
        <Props name={item.name} key={index} id = {index} addFriends = {addFriends} profession = {item.profession} Image = {item.Image} checkFriends = {item.friends}/>
      ))} */}
      <div className="w-[80%] h-[90%] rounded-sm">
        <Navbar data = {value}/>
        <div className="w-[100%] flex items-start justify-center pt-30 flex-wrap gap-4">
          {value.map((item, index) => (
            <AddtoFav
              key={index}
              id={index}
              Image={item.Image}
              handleFav={handleFav}
              song={item.Song}
              name={item.name}
              checkFav={item.addFav}
            />
          ))}
        </div>
      </div>
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
