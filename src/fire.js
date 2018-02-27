import { default as fb } from 'firebase';

const config = {
    apiKey: "AIzaSyATna9VCxNkw4C7QdBllsguUfdndMJ9UUc",
    authDomain: "vantage-point-c539f.firebaseapp.com",
    databaseURL: "https://vantage-point-c539f.firebaseio.com",
    projectId: "vantage-point-c539f",
    storageBucket: "vantage-point-c539f.appspot.com",
    messagingSenderId: "956780995778"
};

const firebase = fb.initializeApp(config);

export default firebase;