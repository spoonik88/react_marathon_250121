import React,{useState} from 'react';
import Menu from './Menu/Menu';
import NavBar from './NavBar/NavBar';

const MenuHeader = () => {

    const [isActive, setActive] = useState(false);

    const handleMenu = () => {             
        setActive(!isActive)                       
      }

 return (
     <>
     <NavBar isActive={isActive} onMenuClick={handleMenu}/>
     <Menu isActive={isActive} onMenuClick={handleMenu}/>
     
   
   </>
 )
   
}
export default MenuHeader