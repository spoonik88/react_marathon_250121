import React from 'react';
import s from './NavBar.module.scss';
import cn from 'classnames'

const NavBar = ({isActive,onMenuClick}) => { 
  
    const handleNavBarClick = () => {           
      onMenuClick && onMenuClick(isActive)                  
    }

 return (
     <>
  <nav id={s.navbar}>
  <div className={s.navWrapper}>
    <p className={s.brand}>
      LOGO
    </p>
    <a className={cn(s.menuButton, {[s.active]:isActive})} onClick={handleNavBarClick}>
      <span />
    </a>
  </div>
</nav>
   </>
 )
   
}
export default NavBar