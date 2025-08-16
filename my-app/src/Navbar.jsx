import React from "react";

function Navbar({ data }) {
  return (
    <div>
      <ul className="w-[100%] h-[10%] px-3 flex justify-between items-center mt-2">
        <li className="text-xl font-light">Orange</li>
        <li className="text-white text-xl px-3 py-1 rounded-md bg-orange-700 flex justify-center items-center">
          Favorites{" "}
          <span className="size-8 ml-2 rounded-full bg-zinc-200/50 flex items-center justify-center text-[14px]">
          {data.filter((item) => item.addFav).length}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
