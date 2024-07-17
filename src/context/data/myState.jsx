import React from "react";
import MyContext from "./myContext";

export const MyState = (props) => {
  const state = {
    name: "Arindom Kundu",
    age: 21,
  };

  const color = "red";

  return (
    <MyContext.Provider value={{ state, color }}>
      {props.children}
    </MyContext.Provider>
  );
};
export default MyState;
