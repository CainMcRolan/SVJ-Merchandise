import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeBody() {
  return (
    <div className="min-w-full h-[90%] shadow-md flex flex-col justify-center items-center ">
      <h1 className="font-Anton text-5xl mb-2">SVJ Clothify & CO.</h1>
      <p className="font-fancy text-2xl mb-6">
        Introducing the Fire Collection
      </p>
      <NavLink
        to={"/store"}
        className="bg-black text-white p-4 hover:brightness-90"
      >
        SHOP NOW
      </NavLink>
    </div>
  );
}
