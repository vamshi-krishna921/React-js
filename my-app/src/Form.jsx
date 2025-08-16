import React from "react";
import { useForm } from "react-hook-form";

function Form({handleSubmitData}) {
    const {register,handleSubmit,reset} = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleSubmitData(data);
        reset();
      })}
      className="w-[90%] h-12 flex justify-center items-center gap-5"
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter name"
        className="outline-1 outline-black px-6 py-2.5 rounded-md"
        {...register("name")}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Image source"
        className="outline-1 outline-black px-6 py-2.5 rounded-md"
        {...register("image")}
      />
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter gmail"
        className="outline-1 outline-black px-6 py-2.5 rounded-md"
        {...register("gmail")}
      />
      <input type="submit" value="Add" className="px-4 py-1 cursor-pointer bg-blue-500 rounded-2xl text-white"/>
    </form>
  );
}

export default Form;
