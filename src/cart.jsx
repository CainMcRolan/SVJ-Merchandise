import React from "react";
import NavBar from "./components/navbar";
import CartBody from "./components/cartComponents/cartBody";

export default function Cart() {
  return (
    <div className="min-h-full min-w-full bg-white">
      <NavBar></NavBar>
      <CartBody></CartBody>
    </div>
  );
}
