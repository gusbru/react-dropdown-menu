import React from "react";
import "./DropdownMenu.css";
import DropdownItem from "../DropdownItem";
import { MenuItem } from "../../Types/MenuItem";

export default function DropdownMenu(props: any) {
  return (
    <div className="dropdown">
      {props.children.map((item: MenuItem) => (
        <DropdownItem
          key={item.itemText}
          leftIcon={item.leftIcon}
          rightIcon={item.rightIcon}
        >
          {item.itemText}
        </DropdownItem>
      ))}
    </div>
  );
}
