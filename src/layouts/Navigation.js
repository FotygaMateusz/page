import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "main", path: "/" },
  { name: "about me", path: "/about" },
  { name: "projects", path: "/projects" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <button key={item.name}>
      <NavLink className="inactive" to={item.path}>
        {item.name}
      </NavLink>
    </button>
  ));

  return (
    <nav className="main">
      {menu}
      <hr />
    </nav>
  );
};

export default Navigation;
