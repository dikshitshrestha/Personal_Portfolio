import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex px-10 py-8 justify-between items-center">
      <h1 className="font-bold text-xl flex">
        Dikshit <span className="text-rose-500">.dev</span>
      </h1>
      <nav className="flex gap-6 text-zinc-500">
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
          onClick={() => isActive}
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
