import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD7_nLuDf-PmInXMAsBrujs97BZYOny32Y",
  authDomain: "pokemok-game.firebaseapp.com",
  databaseURL: "https://pokemok-game-default-rtdb.firebaseio.com",
  projectId: "pokemok-game",
  storageBucket: "pokemok-game.appspot.com",
  messagingSenderId: "903520095468",
  appId: "1:903520095468:web:9788631db194f54fba29c9",
};
firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
   
    this.fire = firebase;
    this.database = this.fire.database();
  }
  getPokemonsOnce = async () => {
    return await this.database
      .ref('pokemons')
      .once('value')
      .then( snapshot => snapshot.val());
  };

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  addPokemon = (data,cb) => {
      const newKey = this.database.ref().child('pokemon').push().key
      this.database.ref('pokemons/' + newKey).set(data).then( () => cb())
  }
}


export default Firebase ;
