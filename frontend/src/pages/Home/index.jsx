import React from "react";
import "./style.css";
import CustomCard from "@shared-components/CustomCard";

function Home() {
  return (
    <>
      <div className="banner mt-11 min-h-screen flex flex-col text-center items-center justify-center bg-palette-lighter after:bg-palette-light">
        <p className="font-light text-2xl">Welcome to Ecommerce</p>
        <h1 className="font-semibold text-4xl my-5">
          FIND AMAZING PRODUCTS BELOW
        </h1>
        <a
          href="#container"
          className="bg-palette-light text-palette-dark pl-4 rounded-full flex items-center"
        >
          <span className="mr-5">Scroll</span>
          <span className="bg-palette-light hover:bg-palette-primary  w-16 h-16 flex items-center justify-center rounded-full">
            🖱️
          </span>
        </a>
      </div>
      <h2 className="text-center text-2xl border-b-2 border-b-palette-primary border-solid max-w-lg my-20 mx-auto">
        Featured Products
      </h2>
      <div id="container" className="grid grid-cols-3 gap-4 m-4">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </>
  );
}

export default Home;
