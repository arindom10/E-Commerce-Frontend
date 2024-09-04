import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Order = () => {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <div
      style={{
        color: mode === "dark" ? "white" : "",
      }}
    >
      <Layout>
        <p>Order</p>
      </Layout>
    </div>
  );
};

export default Order;
