import { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { PokemonContext } from "../../../context/pokemonContext";

import BoardPage from "./Bourd/BoardPage";
import FinishPage from "./Finish/Finish";
import StartPage from "./Start/StartPage";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});
  const [pokemonsDB, setPokemonsDB] = useState({});
  const match = useRouteMatch();

 

console.log(Object.values(pokemons).length)

  const clearSelectCarts = () =>{
    setPokemons({})
    setPokemonsDB({})
  }

  const clearSelectCart = () => {
    setPokemons({})
  }
  const handlerIsSelect = (key, pokemon) => {
    setPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };


  const handlerIsSelectDB = (player2) => {
   
    setPokemonsDB((prevState) => {
      const copyState = { ...prevState };

      return { ...copyState, ...player2 };
    });
  };



  return (
    <PokemonContext.Provider
      value={{
        pokemons: pokemons,
        isSelected: handlerIsSelect,
        pokemonsDB: pokemonsDB,
        isSelectedDB: handlerIsSelectDB,
        clearSelectCarts:clearSelectCarts,
        clearSelectCart:clearSelectCart
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};
export default GamePage;
