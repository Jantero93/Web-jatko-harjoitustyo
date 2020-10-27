import * as firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "AIzaSyAARr9dZyWlh7o6Igu1GPTyXTdaol5WQlA",
    authDomain: "fir-z-b5485.firebaseapp.com",
    databaseURL: "https://fir-z-b5485.firebaseio.com",
    projectId: "fir-z-b5485",
    storageBucket: "fir-z-b5485.appspot.com",
    messagingSenderId: "166389308626",
    appId: "1:166389308626:web:037a65b20f2ff428b3210b",
};

firebase.initializeApp(config);

export default firebase.database();

