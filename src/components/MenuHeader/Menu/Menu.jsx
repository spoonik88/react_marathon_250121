import React from 'react';
import s from './Menu.module.scss';
// import cn from 'classnames'

const Menu= ({isActive}) => { 
 console.log(isActive)

 return (
     <>
  
<div className={`${s.menuContainer} ${isActive ? s.active : s.deactive}`}>
  <div className={s.overlay}/>
  <div className={s.menuItems}>
    <ul>
      <li>
        <a href="#welcome">
          HOME
        </a>
      </li>
      <li>
        <a href="#game">
          GAME
        </a>
      </li>
      <li>
        <a href="#about">
          ABOUT
        </a>
      </li>
      <li>
        <a href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  </div>
</div>

   </>
 )
   
}
export default Menu