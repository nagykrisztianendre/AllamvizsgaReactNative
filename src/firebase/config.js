import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDS-NKr0iKv20eZw-LM_uYp5SU1_M-g6bY",
    authDomain: "music-player-95826.firebaseapp.com",
    projectId: "music-player-95826",
    storageBucket: "music-player-95826.appspot.com",
    messagingSenderId: "430569804801",
    appId: "1:430569804801:web:5848059ac35dd158b95c00",
    measurementId: "G-NW61DHTY27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};

