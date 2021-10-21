import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.svg";
import useAuth from "../../hooks/useAuth";
const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="flex px-10 py-5 bg-gray-800 justify-between">
      <div className="flex flex-col md:flex-row">
        <img src={logo} alt="Logo" className="w-16" />
        <h1 className="self-center text-white  text-xl md:text-3xl hover:text-yellow-400">
          <NavLink exact to="/">
            Game It Out
          </NavLink>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "orangered",
          }}
          className=" text-xl md:text-3xl text-white hover:text-red-500 px-3 self-center"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          activeStyle={{
            fontWeight: "bold",
            color: "orangered",
          }}
          className="text-xl md:text-3xl text-white hover:text-red-500 px-3 self-center"
        >
          About
        </NavLink>
        <NavLink
          to="credits"
          activeStyle={{
            fontWeight: "bold",
            color: "orangered",
          }}
          className="text-xl md:text-3xl text-white hover:text-red-500 px-3 self-center"
        >
          Credits
        </NavLink>
        
        <NavLink
          to="registration"
          activeStyle={{
            fontWeight: "bold",
            color: "orangered",
          }}
          className="text-xl md:text-3xl text-white hover:text-red-500 px-3 self-center"
        >
          Registration
        </NavLink>
        {user?.email && (
          <button
            onClick={logout}
            className="text-xl md:text-3xl text-white hover:text-red-500 px-3 self-center"
          >
            log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
