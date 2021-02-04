import React from 'react';
import s from './Game.module.scss';

const GamePage = ({onChangePage}) => {

    const handleClick = () => {
         
        onChangePage && onChangePage('app');
       
    }

 return (
     <>
   <div>This is game page</div>
   <button onClick={handleClick}>Homepage</button>
   </>
 )
   
}
export default GamePage