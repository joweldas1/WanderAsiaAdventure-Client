// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGEING_SENDER_ID,
//     appId: import.meta.env.VITE_APPID
// };

const firebaseConfig = {
    apiKey: "AIzaSyCaGJwBDKMzzF7hb_ReCFqmC126L3-wd3E",
    authDomain: "wanderasiaadventure.firebaseapp.com",
    projectId: "wanderasiaadventure",
    storageBucket: "wanderasiaadventure.appspot.com",
    messagingSenderId: "910205446298",
    appId: "1:910205446298:web:ba9235b8abf41e95785723"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth