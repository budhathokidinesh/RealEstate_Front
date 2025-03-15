import React from "react";
import { Menu, ActionIcon } from "@mantine/core";
import { IoMenu } from "react-icons/io5";
import "@mantine/core/styles.css";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ user, logout }) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <Menu.Target>
        {/* <Avatar src={user?.picture} alt="user image" size={12} /> */}
        <ActionIcon variant="subtle" color="white">
          <IoMenu size={24} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate("./favourites", { replace: true })}>
          Favourites
        </Menu.Item>
        <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
          Bookings
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
