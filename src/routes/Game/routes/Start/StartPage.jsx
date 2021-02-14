import React, { useState, useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import s from "./StartPage.module.scss";
import firstBackground from "../../../../images/bg3.jpg";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import cn from 'classnames'

import { FireBaseContext } from "../../../../service/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";


const StartPage = () => {
  const history = useHistory();

  const clickStartGame = ()=>{
    history.push("/game/board");
  }


  const selectContext = useContext(PokemonContext)
 const firebase = useContext(FireBaseContext)
 
  const [pokemons, setPokemons] = useState({});

  const getPokemons = async () =>{
    const response = await firebase.getPokemonsOnce();
    setPokemons(response);

  }

  useEffect(() => {
    getPokemons();
  },[]);

  

  const handleChangeSelect =(key) => {
    const pokemon ={...pokemons[key]}
    selectContext.isSelected(key,pokemon)
    setPokemons(prevState => ({
      ...prevState, 
      [key]:{
        ...prevState[key],
        selected:!prevState[key].selected
      }
    }))
  }
 
  console.log(Object.keys(selectContext.pokemons).length)
 
  return (
    <>
      <Layout id="card" title={"Game play"} urlBg={firstBackground}>
        <div className={s.buttonWrap}>
          {/* <button className={s.btn} onClick={addClickCard}>
            add pokemon card
          </button> */}
          <button className={cn(s.btn, s.starGame)} onClick={clickStartGame} disabled={Object.keys(selectContext.pokemons).length < 5}>
            Start Game
          </button>
         
        </div>
        <div className={s.flex}>
          {Object.entries(pokemons).map(
            ([key, { id, img, values, type, name,selected=false }]) => (
              <PokemonCard
                key={key}
                img={img}
                name={name}
                values={values}
                id={id}
                type={type}
                isActive={true}
                isSelected = {selected}                
                className={s.card}                
                onClick={()=>
                  {
                    if (Object.keys(selectContext.pokemons).length < 5 || selected){
                      handleChangeSelect(key)
                    }
                  }
                  }
                
              />
            )
          )}
        </div>
      </Layout>
    
    </>
  );
};
export default StartPage;
