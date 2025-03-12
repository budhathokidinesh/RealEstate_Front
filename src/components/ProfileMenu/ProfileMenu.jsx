import React from "react";
import { Menu, ActionIcon } from "@mantine/core";
import { IoMenu } from "react-icons/io5";
import "@mantine/core/styles.css";

const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu>
      <Menu.Target>
        {/* <Avatar src={user?.picture} alt="user image" size={12} /> */}
        <ActionIcon variant="subtle" color="white">
          <IoMenu size={24} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Favourites</Menu.Item>
        <Menu.Item>Bookings</Menu.Item>
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
