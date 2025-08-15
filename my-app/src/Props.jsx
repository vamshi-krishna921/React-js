import React from "react";

function Props({ name, profession, Image, id, addFriends, checkFriends }) {
  return (
    <div className="w-[22%] h-[40vh] bg-white rounded-md overflow-hidden">
      <div className="w-full h-[60%]">
        <img src={Image} alt="" className="w-full h-full object-cover" />
      </div>
      <h1 className="font-semibold text-2xl ml-2 mt-2">{name}</h1>
      <p className="ml-2 mt-1 text-xl">{profession}</p>
      <button
        onClick={() => addFriends(id)}
        className={`ml-2 mt-2 px-4 py-2 text-[16px] font-[450] rounded-md flex justify-center items-center ${checkFriends ? "bg-red-500" : "bg-blue-500"} hover:shadow ${checkFriends ? "shadow-red-500" : "shadow-blue-500"}  text-white`}
      >
        {checkFriends == true ? "Remove friend" : "Add friend"}
      </button>
    </div>
  );
}

export default Props;
