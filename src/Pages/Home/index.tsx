import React from "react";
import Navbar from "../../Components/Navbar";
import NavItem from "../../Components/NavItem";
import DropdownMenu from "../../Components/DropdownMenu";
import { ReactComponent as ArrowIcon } from "../../Icons/arrow.svg";
import { ReactComponent as BellIcon } from "../../Icons/bell.svg";
import { ReactComponent as BoltIcon } from "../../Icons/bolt.svg";
import { ReactComponent as CaretIcon } from "../../Icons/caret.svg";
import { ReactComponent as ChevronIcon } from "../../Icons/chevron.svg";
import { ReactComponent as CogIcon } from "../../Icons/cog.svg";
import { ReactComponent as MessengerIcon } from "../../Icons/messenger.svg";
import { ReactComponent as PlusIcon } from "../../Icons/plus.svg";

export default function Home() {
  return (
    <div>
      <Navbar>
        <NavItem icon={<ArrowIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<BoltIcon />} />
        <NavItem icon={<CaretIcon />}>
          {/* Dropdown */}
          <DropdownMenu>
            {[
              {
                itemText: "Settings",
                leftIcon: <CogIcon />,
                rightIcon: <ChevronIcon />,
              },
              {
                itemText: "Chat",
                leftIcon: <MessengerIcon />,
              },
            ]}
          </DropdownMenu>
        </NavItem>
        <NavItem icon={<ChevronIcon />} />
        <NavItem icon={<CogIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<PlusIcon />} />
      </Navbar>
      <h1>Home</h1>
    </div>
  );
}
