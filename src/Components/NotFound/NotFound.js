import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-9xl py-40">
        Go Back to{" "}
        <NavLink to="/" className="text-yellow-300 hover:text-white">
          Home
        </NavLink>{" "}
      </h1>
    </div>
  );
};

export default NotFound;
