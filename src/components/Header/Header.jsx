import React from 'react';
import s from './Header.module.scss';
import { useHistory } from 'react-router-dom';


const Header = ({ title, desrc, onClickButton }) => {
    const history = useHistory();

    const handleClick = () =>{        
        history.push('/game')
        
    }
    return(
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}></div>
            <div className={s.moon}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{desrc}</p>
                <button className={s.btn} onClick={handleClick}>Start Game</button>
            </div>
            
        </header>
    )
}
    

export default Header