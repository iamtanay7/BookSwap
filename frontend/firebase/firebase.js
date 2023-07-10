import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX2hwzWZNNlKrEBZySC0T9hCFo3mjzRqo",
  authDomain: "bookswap-colab20.firebaseapp.com",
  projectId: "bookswap-colab20",
  storageBucket: "bookswap-colab20.appspot.com",
  messagingSenderId: "1004869398482",
  appId: "1:1004869398482:web:bc2d453b1fab02b5a8620b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
