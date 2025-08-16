import React, { useState } from "react";
import { useRef } from "react";

//* Using useRef()
// function FormHandling() {
//   const userName = useRef(null);
//   const userPassword = useRef(null);
// const handleSubmit = (e) => {
//   e.preventDefault();
//   let name = userName.current.value;
//   let password = userPassword.current.value;
//   console.log(name,password);
// };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={userName} type="text" name="" placeholder="Enter your name" />
//       <input ref={userPassword} type="password" name="" placeholder="Enter your password" />
//       <input type="submit" />
//     </form>
//   );
// }

//* Using useState()

function FormHandling() {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        onChange={handleChange}
        className="border border-black ml-1.5"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
        className="border border-black ml-1.5"
      />
      <input type="submit" />
    </form>
  );
}
export default FormHandling;
