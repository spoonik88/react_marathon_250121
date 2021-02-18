import { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import s from "./PlayerBoard.module.scss";
import cn from "classnames";

const PlayerBoard = ({ card,onClickCard,player }) => {
  const [isSelect, setSelect] = useState(null);

  return (
    <>
      {card.map((i) => (
        <div
          className={cn(s.card, { [s.selected]: isSelect === i.id })}
          onClick={
            () =>{ setSelect(i.id)
            onClickCard && onClickCard({
              player,
              ...i
            }
            )
          }}
        >
          <PokemonCard
            key={i.id}
            img={i.img}
            name={i.name}
            values={i.values}
            id={i.id}
            type={i.type}
            isActive={true}
            isSelected={isSelect}
            minimize={true}
            className={s.card}
          />
        </div>
      ))}
    </>
  );
};
export default PlayerBoard;
