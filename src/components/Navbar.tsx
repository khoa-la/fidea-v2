import React, { useState } from "react";
import Logo from "./Logo";
import { navLinks } from "../constants";
import { Chip, Divider, IconButton, Popover, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ListMenu from "./ListMenu";
import ListMenuProfile from "./ListMenuProfile";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="w-full flex py-2 justify-between items-center">
      <Logo />
      <ListMenu />

      <div className="hidden lg:flex items-center justify-center">
        <SearchBar />
      </div>

      <ListMenuProfile />
    </div>
  );
}
