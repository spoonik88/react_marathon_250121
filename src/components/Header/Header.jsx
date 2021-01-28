import React from 'react';
import s from "./Header.module.scss";

class Header extends React.Component{
    render(){
        return(
            <header className={s.root}>
                <div className={s.forest}></div>
                <div className={s.container}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.descr}</p>
                </div>
            </header>
        )
    }
}
   

export default Header