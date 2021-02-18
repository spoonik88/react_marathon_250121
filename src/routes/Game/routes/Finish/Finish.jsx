import s from "./Finish.module.scss";

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { FireBaseContext } from "../../../../service/firebaseContext";

const FinishPage = () => {
  const selectContext = useContext(PokemonContext);
  const firebase = useContext(FireBaseContext);
  // console.log(selectContext.clearSelectCart(selectContext.pokemons))
  const history = useHistory();

  const [isSelected, setPokemonsDB] = useState({});

  if (Object.keys(selectContext.pokemons).length === 0) {
    history.replace("/game");
  }

  const handelFinishGame = () => {
    if (!isSelected.isSelected) {
      alert("You must select the pokemon to take");
      return;
    } else {
      firebase.addPokemonCard(
        Object.values(selectContext.pokemonsDB).filter(
          (i) => i.id === isSelected.id
        )[0]
      );
    }
    selectContext.clearSelectCarts({})
   
    history.replace("/game");
  };

  const selectCardAdd = (i) => {
    setPokemonsDB((prevState) => {
      return {
        ...i,
        isSelected: prevState.id === i.id ? !prevState.isSelected : true,
      };
    });
  };
  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.values(selectContext.pokemons).map(
          ({ id, img, values, type, name }) => (
            <PokemonCard
              key={id}
              img={img}
              name={name}
              values={values}
              id={id}
              type={type}
              isActive={true}
              className={s.size}
            />
          )
        )}
      </div>
      <div className={s.wrap}>
        {/* <button>Add card to player two</button> */}
        <button className={s.btn} onClick={handelFinishGame}>
          End Game
        </button>
      </div>
      <div className={s.playerTwo}>
        {Object.values(selectContext.pokemonsDB).map((i) => (
          <PokemonCard
            key={i.id}
            img={i.img}
            name={i.name}
            values={i.values}
            id={i.id}
            type={i.type}
            isActive={true}
            isSelected={
              i.id === isSelected.id ? isSelected.isSelected : i.isSelected
            }
            className={s.size}
            onClick={() => {
              selectCardAdd(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FinishPage;
