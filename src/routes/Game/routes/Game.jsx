
import { useState } from "react";
import { Switch,Route, useRouteMatch  } from "react-router-dom";
import { PokemonContext } from "../../../context/pokemonContext";

import BoardPage from "./Bourd/BoardPage";
import FinishPage from "./Finish/Finish";
import StartPage from "./Start/StartPage";



const GamePage = () => {
  
  const [pokemons, setPokemons] = useState([]);
  const match = useRouteMatch();
 
  const handlerIsSelect = (val) => {
    setPokemons(val)
  }

  console.log(pokemons)
  return (
    <PokemonContext.Provider value={{pokemons, isSelected:handlerIsSelect }}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
      </PokemonContext.Provider>
  );
};
export default GamePage;
