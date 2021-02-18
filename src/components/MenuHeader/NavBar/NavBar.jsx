import React from "react";
import s from "./NavBar.module.scss";
import cn from "classnames";

const NavBar = ({ isActive, onMenuClick, bgActive = false }) => {
  const handleNavBarClick = () => {
    onMenuClick && onMenuClick(isActive);
  };

  return (
    
      <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
        <div className={s.navWrapper}>
          <p className={s.brand}>LOGO</p>
          <div
            className={cn(s.menuButton, { [s.active]: isActive })}
            onClick={handleNavBarClick}
          >
            <span />
          </div>
        </div>
      </nav>
    
  );
};
export default NavBar;
