import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import s from "./Game.module.scss";
import firstBackground from "../../images/bg3.jpg";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { POKEMONS } from "../Home/Home";
import database from "../../service/firebase";

const GamePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  });

  const rand=(min, max)=>Math.floor(Math.random() * max) + min;

  
  const addClickCard = () => {
    const newPokemon =  POKEMONS[rand(1,5)]
     const newKey = database.ref().child('pokemons').push().key;

     const addPokemon = {};
     
     addPokemon['/pokemons/' + newKey] = newPokemon;
     return database.ref().update(addPokemon)
    
  };

  const onCardClick = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }

        acc[item[0]] = pokemon;
        database.ref("pokemons").update(acc);
        return acc;
      }, {});
    });
  };

  return (
    <>
      <Layout id="card" title={"Game play"} urlBg={firstBackground}>
        <div className={s.buttonWrap}>
          <button className={s.btn} onClick={addClickCard}>
            add pokemon card
          </button>
          {/* <button className={s.btn} onClick={deleteClickCard}>
            delete pokemon card
          </button> */}
        </div>
        <div className={s.flex}>
          {Object.entries(pokemons).map(
            ([key, { id, img, values, active, type, name }]) => (
              <PokemonCard
                key={key}
                img={img}
                name={name}
                values={values}
                id={id}
                type={type}
                active={active}
                onClick={onCardClick}
              />
            )
          )}
        </div>
      </Layout>
      <p>This is game page</p>
      <button onClick={handleClick}>Homepage</button>
    </>
  );
};
export default GamePage;
