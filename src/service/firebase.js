import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyD7_nLuDf-PmInXMAsBrujs97BZYOny32Y",
    authDomain: "pokemok-game.firebaseapp.com",
    databaseURL: "https://pokemok-game-default-rtdb.firebaseio.com",
    projectId: "pokemok-game",
    storageBucket: "pokemok-game.appspot.com",
    messagingSenderId: "903520095468",
    appId: "1:903520095468:web:9788631db194f54fba29c9"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();
export default database;