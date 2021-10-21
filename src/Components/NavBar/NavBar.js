import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.svg";
const NavBar = () => {
  return (
    <nav className="flex px-10 py-5 bg-gray-800 justify-between">
      <div className="flex">
        <img src={logo} alt="Logo" className="w-16" />
        <h1 className="self-center text-white text-3xl hover:text-yellow-400">
          <NavLink exact to="/">
            Game It Out
          </NavLink>
        </h1>
      </div>
      <div className="flex">
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "orangered",
          }}
         className="text-3xl text-white hover:text-red-500 px-3 self-center"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          activeStyle={{
            fontWeight: "bold",
            color: "orangered",
          }}
          className="text-3xl text-white hover:text-red-500 px-3 self-center"
        >
          About Us
        </NavLink>
        <NavLink
          to="credits"
          activeStyle={{
            fontWeight: "bold",
            color: "orangered",
          }}
          className="text-3xl text-white hover:text-red-500 px-3 self-center"
        >
          Credits
        </NavLink>
        <NavLink
          to="register"
          activeStyle={{
            fontWeight: "bold",
            color: "orangered",
          }}
          className="text-3xl text-white hover:text-red-500 px-3 self-center"
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
