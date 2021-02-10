import { useContext } from "react";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import s from "./BoardPage.module.scss";

const BoardPage = () => {
  const {pokemons} = useContext(PokemonContext)
  // console.log(selectContext.pokemons)
  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.values(pokemons).map(({id, img, values, type, name,minimize,selected }) => (
            <PokemonCard 
            key={id}
            img={img}
            name={name}
            values={values}
            id={id}
            type={type}
            isActive={true}
            isSelected = {selected}
            minimize
            className={s.card}
            />
          )
        )}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
