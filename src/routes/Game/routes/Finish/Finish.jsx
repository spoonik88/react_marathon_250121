import s from './Finish.module.scss';

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';




const FinishPage = () => {
    const { pokemons,pokemonsDB } = useContext(PokemonContext);
    const firebase = useContext(FireBaseContext)
 
    const history = useHistory();
    const [player2, setPlayer2] = useState([]);

    
    if(Object.keys(pokemons).length){
        history.replace("/game")
      }

console.log(pokemonsDB)

const handelFinishGame = () => {

    history.replace('/game')
}

const selectCardAdd = (pokemonsDB) =>{
   Object.values(pokemonsDB).filter( i => i.id === i.id)

   const newKey = this.database.ref().child('pokemon').push().key
   this.database.ref('pokemons/' + newKey).set(data).then(() => cb())

   
}
    return (
        <div className={s.root}>
      <div className={s.playerOne}>
      {Object.values(pokemons).map(({id, img, values, type, name,selected }) => (
            <PokemonCard 
            key={id}
            img={img}
            name={name}
            values={values}
            id={id}
            type={type}
            isActive={true}
            isSelected = {selected}            
            className={s.size}
            />
          )
        )}
      </div>
      <div className={s.wrap}>
        {/* <button>Add card to player two</button> */}
        <button className={s.btn} onClick={handelFinishGame}>End Game</button>
      </div>
      <div className={s.playerTwo}>
      {Object.values(pokemonsDB).map(({id, img, values, type, name,selected }) => (
            <PokemonCard 
            key={id}
            img={img}
            name={name}
            values={values}
            id={id}
            type={type}
            isActive={true}
            isSelected = {selected}            
            className={s.size}
            onClick = {selectCardAdd}
            />
          )
        )}
     
      </div>
    </div>
    );
};

export default FinishPage;