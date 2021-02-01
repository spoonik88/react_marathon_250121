import React from 'react';
import s from './Header.module.scss';

const Header = ({ title, desrc, onClickButton }) => {
    const handleClick = () =>{        
        onClickButton && onClickButton('game');
    }
    return(
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{desrc}</p>
                <button onClick={handleClick}>Start Game</button>
            </div>
        </header>
    )
}
    

export default Header