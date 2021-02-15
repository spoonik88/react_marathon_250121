import s from './Finish.module.scss';

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import { FireBaseContext } from '../../../../service/firebaseContext';





const FinishPage = () => {
    const { pokemons,pokemonsDB,isSelectedDB } = useContext(PokemonContext);
    const firebase = useContext(FireBaseContext)
 
    const history = useHistory();
    const [isSelect, setSelect] = useState({});
    // const [isSelected, setSelect] = useState({});

    
 if(Object.keys(pokemons).length === 0){
        history.replace("/game")
      }

console.log(pokemonsDB)

const getPokemons = async () =>{
  const response = await firebase.getPokemonsOnce();
  setSelect(response);

}

const handelFinishGame = () => {

    history.replace('/game')
}



const selectCardAdd = (id) =>{
  console.log(id)
  console.log(Object.values(pokemonsDB).map( i => i.id))
   if(pokemonsDB.id === id){
    console.log("sdjhfhsdjflsd")
   }
  // setSelect(prevState => ({
  //   ...prevState, 
  //   [id]:{
  //     ...prevState[id],
  //     isSelected:true
  //   }
  // }))

  firebase.addPokemonCard(Object.values(pokemonsDB), async ()=>{
    getPokemons();
  })
  
}
    return (
        <div className={s.root}>
      <div className={s.playerOne}>
      {Object.values(pokemons).map(({id, img, values, type, name,isSelected }) => (
            <PokemonCard 
            key={id}
            img={img}
            name={name}
            values={values}
            id={id}
            type={type}
            isActive={true}
            isSelected = {isSelected}            
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
      
      {Object.values(pokemonsDB).map(({id, img, values, type, name,selected = false}) => (
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
            onClick = {() =>{selectCardAdd(id)}}
            />
          )
        )}
     
      </div>
    </div>
    );
};

export default FinishPage;