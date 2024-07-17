import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Order = () => {
  const context = useContext(myContext);
  console.log(context);
  const { state, color } = context;
  return (
    <Layout>
      Order
      <h1 className="text-xl font-bold">Name: {state.name}</h1>
      <h1>Age: {state.age} Years</h1>
      <h1>Age: {color} </h1>
    </Layout>
  );
};

export default Order;
