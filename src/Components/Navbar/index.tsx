import React from "react";
import "./Navbar.css";

export default function Navbar(props: React.Props<React.ReactChildren>) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
