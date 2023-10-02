// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX-pcezzaJCmS2oQKb1QAIbc4k38XvFwA",
    authDomain: "dregon-news-project.firebaseapp.com",
    projectId: "dregon-news-project",
    storageBucket: "dregon-news-project.appspot.com",
    messagingSenderId: "850037409666",
    appId: "1:850037409666:web:533106a993ce6baa8e719b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;