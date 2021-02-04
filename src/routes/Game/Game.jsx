import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import s from "./Game.module.scss";
import firstBackground from "../../images/bg3.jpg";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {POKEMONS} from  "../Home/Home";


const GamePage = () => {
   const history = useHistory();

  const handleClick = () => {
    history.push('/home')
  };
 
  const [isPokemons, setPokemons] = useState(POKEMONS);  

  const onCardClick= (id) =>{

      const newPokemons = isPokemons.map((i) =>
        i.id === id
          ? { ...i, isActive: !i.isActive }
          : { ...i, isActive: i.isActive }
      );
      
      setPokemons(newPokemons);
      
  }
 

  return (
    <>
    
    <Layout id="card" title={"Game play"} urlBg={firstBackground} >
            <div className={s.flex}>
              {isPokemons.map((i) => (
                <PokemonCard
                key={i.id}
                  img={i.img}
                  name={i.name}
                  values={i.values}
                  id={i.id}
                  type={i.type}
                  isActive = {i.isActive}
                  onClick={onCardClick}
                />
              ))}
            </div>
          </Layout>
          <p>This is game page</p>
          <button onClick={handleClick}>Homepage</button>
        </>
  );
};
export default GamePage;
