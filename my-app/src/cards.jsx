import React from "react";

const Cards = () => {
  let data = [
    {
      img: "https://images.unsplash.com/photo-1541275055241-329bbdf9a191?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Violet flower",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt.",
      inStock: true,
    },
    {
      img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rose flower",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt.",
      inStock: false,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bouquet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt.",
      inStock: false,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "White flower",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt.",
      inStock: true,
    },
  ];
  return (
    // Using fragments
    <>
      {data.map((elem, index) => {
        return (
          <div key={index} className="w-[250px] h-[350px] bg-zinc-200 flex">
            <div className="min-w-full h-1/2">
              <div className="min-w-full h-full">
                <img
                  src={elem.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold m-1">{elem.name}</h1>
              <p className="m-1">{elem.description}</p>
              {/*! conditional rendering button inStock and Out of Stock */}
              <button
                className={`px-8 py-4 text-sm ${
                  elem.inStock ? 'bg-blue-400' : 'bg-red-500'
                } ml-1 rounded cursor-pointer`}
              >
                {elem.inStock ? "In Stock" : "Out of Stock"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
