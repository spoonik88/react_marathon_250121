import { useContext, useEffect, useState } from "react";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import s from "./BoardPage.module.scss";
import { useHistory } from "react-router-dom";
import PlayerBoard from "../../../../components/PlayerBoard/PlayerBoard";

const BoardPage = () => {
  const { pokemons,handlerIsSelectDB} = useContext(PokemonContext);
  const pokemonContext=useContext(PokemonContext);
 
  
  const history = useHistory();
  const [board, setBoard] = useState([]);
  const [player1, setPlayer1] = useState(() => {
    return Object.values(pokemons).map((i) => ({
      ...i,
      possession: "blue",
    }));
  });
  const [player2, setPlayer2] = useState([]);
  const [choiceCard, setChoiceCard] = useState(null);
  const [steps,setSteps]=useState(0);
  
  const counterWin = (board,player1,player2) => {
      let player1Count = player1.length;
      let player2Count = player2.length;

      board.forEach( e => {
        if(e.card.possession === "red"){
          player2Count++
        }
        if(e.card.possession === "blue"){
          player1Count++
        }
      });
      return [player1Count,player2Count]

  }
  

  useEffect(async () => {
    const boardResponse = await fetch(
      "https://reactmarathon-api.netlify.app/api/board"
    );
    const boardRequest = await boardResponse.json();
    setBoard(boardRequest.data);

    const player2Response = await fetch(
      "https://reactmarathon-api.netlify.app/api/create-player"
    );
    const player2Request = await player2Response.json();
    setPlayer2(() => {
      return player2Request.data.map((i) => ({
        ...i,
        possession: "red",
      }));
    });
    
  }, []);


    
 

  
  const handelClickPosition = async (position) => {
    
    // console.log("yjdst gjrbvjys",player2)
    
    // console.log(s.card)
    pokemonContext.isSelectedDB(player2)
    if (choiceCard) {
      const params = {
        position,
        card: choiceCard,
        board,
        className:s.card
      };

      const res = await fetch(
        "https://reactmarathon-api.netlify.app/api/players-turn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );

      const request = await res.json();
      
        

      if(choiceCard.player === 1){
        setPlayer1( prevState => prevState.filter(i => i.id !== choiceCard.id))
      }
      
      if(choiceCard.player === 2){
        setPlayer2( prevState => prevState.filter(i => i.id !== choiceCard.id))
      }
      setBoard(request.data)
      setSteps(prevState=>{
        const count =prevState+1
        return count;
      })
      
    }
  

  };

useEffect(
  () =>{
if(steps === 9){
   const [count1,count2] = counterWin(board,player1,player2)

   if(count1 > count2){
         alert('win')
         history.push('/game/finish')
   }else if (count1 < count2){
     alert("lose")
     history.replace('/game')
   } else(
     alert("draw")
   )

}

  },[steps]


)

if(Object.keys(pokemons).length === 0){
  history.replace("/game")
}


  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        <PlayerBoard
          card={player1}
          player={1}
          onClickCard={(card) => setChoiceCard(card)}
        />
      </div>
      <div className={s.board}>
        {board.map((i) => (
          <div
            key={i.position}
            className={s.boardPlate}
            onClick={() => !i.card && handelClickPosition(i.position)}
          >
            {i.card && <PokemonCard {...i.card} isActive={true} minimize />}
          </div>
        ))}
      </div>
      <div className={s.playerTwo} >
        <PlayerBoard
          card={player2}
          player={2}
          onClickCard={(card) => setChoiceCard(card)}
          // onClickAddCard ={()=>(player2)}

        />
      </div>
    </div>
  );
};

export default BoardPage;
