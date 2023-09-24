import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "@images/logo.jpg";
import SideDrawer from "./SideDrawer";

const Header = () => {
  return (
    <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 fixed-nav bg-palette-light ">
      <div className="flex-1 flex my-2">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <img width={50} height={50} src={Logo} alt="logo" />
          </Link>
          <h6 className="font-bold ml-1 text-2xl md:text-4xl text-black">
            Ecommerce
          </h6>
        </div>
      </div>
      <SideDrawer />
    </header>
  );
};

export default Header;
