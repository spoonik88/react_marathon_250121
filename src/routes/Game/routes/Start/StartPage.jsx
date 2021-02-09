import React, { useState, useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import s from "./StartPage.module.scss";
import firstBackground from "../../../../images/bg3.jpg";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { POKEMONS } from "../../../Home/Home";
import cn from 'classnames'

import { FireBaseContext } from "../../../../service/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";


const StartPage = () => {
  const history = useHistory();
  const SelectContext = useContext(PokemonContext)
 const firebase = useContext(FireBaseContext)
 
  const [pokemons, setPokemons] = useState({});

  const getPokemons = async () =>{
    const response = await firebase.getPokemonsOnce();
    setPokemons(response);

  }

  useEffect(() => {
    getPokemons();
  },[]);

  const rand=(min, max)=>Math.floor(Math.random() * max) + min;

  
  const addClickCard = () => {
    const data =  POKEMONS[rand(0,4)]
    
    firebase.addPokemon(data, () => {
      getPokemons();
    })   
    
       
  };

  const onCardClick = (id) => {
    
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.selected= !pokemon.selected;          
        }
        
        acc[item[0]] = pokemon;
        firebase.postPokemon(item[0],pokemon);
        // SelectContext.pokemons = acc
        // console.log(SelectContext)
        return acc;
      }, {});
    });
  };
  const clickStartGame = ()=>{
    history.push("/game/board");
  }
 
  return (
    <>
      <Layout id="card" title={"Game play"} urlBg={firstBackground}>
        <div className={s.buttonWrap}>
          <button className={s.btn} onClick={addClickCard}>
            add pokemon card
          </button>
          <button className={cn(s.btn, s.starGame)} onClick={clickStartGame}>
            Start Game
          </button>
         
        </div>
        <div className={s.flex}>
          {Object.entries(pokemons).map(
            ([key, { id, img, values, active, type, name,minimize,className,selected }]) => (
              <PokemonCard
                key={key}
                img={img}
                name={name}
                values={values}
                id={id}
                type={type}
                isActive={true}
                isSelected = {selected}
                minimize={minimize}
                className={className}
                onClick={onCardClick}
                
              />
            )
          )}
        </div>
      </Layout>
    
    </>
  );
};
export default StartPage;
