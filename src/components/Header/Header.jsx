import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logop.png";
import "./Header.css";
import { BiMenu } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* Logo  */}
        <Link to="/">
          <img src={logo} width={70} height={50} />
        </Link>

        {/* Menu  */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:physmarika@gmail.com">Contact</a>
            {/* Login Button  */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
          <div
            className="menu-icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <BiMenu size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
