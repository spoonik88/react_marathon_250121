import React from 'react';
import s from "./Layout.module.scss";

class Layout extends React.Component{
    render(){
        const {id, title, descr,urlBg,colorBg}= this.props  
   
     const  bgCover = (urlBg !== undefined ) ?  {backgroundImage: `url(${urlBg})`} : {backgroundColor: colorBg }    
        return(
            <section className={s.root} style = {bgCover} id={id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc, s.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
        )
    }
}
   

export default Layout