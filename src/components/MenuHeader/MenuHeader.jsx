import React,{useState} from 'react';
import Menu from './Menu/Menu';
import NavBar from './NavBar/NavBar';

const MenuHeader = ({bgActive}) => {
  
    const [isActive, setActive] = useState(null);

    const handleMenu = () => {             
        setActive(prevState => !prevState)                       
      }

 return (
     <>
     <Menu isActive={isActive} onMenuClick={handleMenu}/>
     <NavBar isActive={isActive}  bgActive={bgActive} onMenuClick={handleMenu}/>
     
     
   
   </>
 )
   
}
export default MenuHeader