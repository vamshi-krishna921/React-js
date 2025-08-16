import React from "react";

function AddtoFav({Image,name,id,song,checkFav,handleFav}) {
  return (
    <div className="w-70 h-35 bg-white shrink-0 flex items-center p-2 rounded-md gap-5 relative m-2.5">
      <div className="w-[40%] h-[80%] bg-amber-700 rounded-md overflow-hidden">
        <img src={Image} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="w-[60%] h-full mt-4">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-l mt-2">{song}</p>
      </div>
      <button onClick={() => handleFav(id)} className={`px-3 py-1 flex justify-center items-center ${checkFav == true ? "bg-blue-500":"bg-orange-600"} absolute left-[38%] hover:shadow hover:${checkFav == true ? "shadow-blue-900": "shadow-orange-800"} -bottom-4 rounded-full text-white hover:transition-transform hover:-translate-y-1 duration-100`}>
        {checkFav == false ? "Add to Favorite" : "Added"}
      </button>
    </div>
  );
}

export default AddtoFav;
