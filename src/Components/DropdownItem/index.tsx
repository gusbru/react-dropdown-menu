import React from "react";
import "./DropdownItem.css";

export default function DropdownItem(props: any) {
  return (
    <a href=".#" className="menu-item">
      <span className="dropdown-item icon-button">{props.leftIcon}</span>

      <span className="dropdown-text">{props.children}</span>

      <span className="dropdown-item icon-right ">{props.rightIcon}</span>
    </a>
  );
}
