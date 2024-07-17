import React from "react";
import MyContext from "./myContext";

export const MyState = (props) => {
  const state = {
    name: "Arindom Kundu",
    age: 21,
  };

  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};
export default MyState;
