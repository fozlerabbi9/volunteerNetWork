// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD9S3qNafWwPn61rTCiNT1dq8Ga0fxBlc",
  authDomain: "volunteer-network-a0474.firebaseapp.com",
  projectId: "volunteer-network-a0474",
  storageBucket: "volunteer-network-a0474.appspot.com",
  messagingSenderId: "448766109653",
  appId: "1:448766109653:web:cf719bd407d248fa1f3f5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;