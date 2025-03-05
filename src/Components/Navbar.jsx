import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex py-6 gap-4 items-center justify-center lg:justify-between lg:px-10 w-full">
      <h1 className="font-bold flex">
        Dikshit <span className="text-rose-500">.dev</span>
      </h1>
      <nav className="flex gap-4 text-zinc-500 text-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "font-semibold text-black" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "font-semibold text-black" : ""}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "font-semibold text-black" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
