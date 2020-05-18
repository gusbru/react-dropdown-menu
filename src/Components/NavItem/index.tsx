import React, { useState } from "react";
import "./NavItem.css";

export default function NavItem(props: any) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item" onClick={() => setOpen(!open)}>
      <a href=".#" className="navitem-icon-button">
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}
