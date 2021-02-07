import React from "react";
import s from "./Menu.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

const MENU = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "GAME",
    to: "/game",
  },
  {
    title: "ABOUT",
    to: "/about",
  },
  {
    title: "CONTACT",
    to: "/contact",
  },
];


const Menu = ({ isActive,onMenuClick}) => {


  const handleClickMenu= () =>{
    onMenuClick && onMenuClick(isActive)    
  }

  return (
    <>
      <div className={cn(s.menuContainer, {
         [s.active] : isActive === true,
          [s.deactive] : isActive === false
      })}>
        <div className={s.overlay} />
        <div className={s.menuItems}>
          <ul>
            {MENU.map(({ title, to }, index) => (
              <li key={index}>
                <Link to={to} onClick={handleClickMenu}>{title}</Link>                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Menu;
