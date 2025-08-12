import React from "react";

function Events() {
  const data = [
    {
      name: "Hanuman",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti.",
    },
    {
      name: "Mahakal",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti.",
    },
    {
      name: "Sri Ram",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti.",
    },
  ];
  function handleEvent() {
    alert("This song is downloaded.")
  }
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div className="p-3 bg-zinc-100 rounded gap-3.5 flex flex-col flex-wrap">
            <h1 className="text-2xl font-semibold">{}</h1>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              odit.
            </p>
            <button
              className="px-3 py-1.5 bg-sky-500 rounded hover:bg-sky-400 cursor-pointer"
              onClick={handleEvent}
            >
              Download Now
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Events;
