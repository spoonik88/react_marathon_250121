import React from 'react';
import s from './PokemonCard.module.scss';
import cn from 'classnames'
import CardBackedImg from './../../images/card-back-side.jpg'


const PokemonCard = ({name,values,id,type,img, onClick,active}) => {
  
    const handleCardClick = () => {        
        onClick && onClick(id);           
    }

return (
    <div className={cn(s.root, {[s.active]:active})}  onClick={handleCardClick}>
        <div className={cn(s.pokemonCard)}>
            <div className={s.cardFront}>
                <div className={cn(s.wrap, s.font)}>
                    <div className={cn(s.pokemon, s.[type])}>
                        <div className={s.values}>
                            <div className={cn(s.count, s.top )}>{values.top}</div>
                            <div className={cn(s.count, s.right )}>{values.right}</div>
                            <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                            <div className={cn(s.count, s.left)}>{values.left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name} />
                        </div>
                        <div className={s.info}>
                            <span className={s.number}>#{id}</span>
                            <h3 className={s.name}>{name}</h3>
                            <small className={s.type}>Type: <span>{type}</span></small>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={cn(s.wrap, s.back)}>
                    <img src={CardBackedImg} alt="Сard Backed" />
                </div>
            </div>

        </div>
    </div>
)

}



export default PokemonCard