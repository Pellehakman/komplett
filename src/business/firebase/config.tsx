import { initializeApp } from "firebase/app"; // no compat for new SDK
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCB5r_1E8DCxnJJ877L_fk27hv8DAaTpQY",
  authDomain: "komplett-db.firebaseapp.com",
  projectId: "komplett-db",
  storageBucket: "komplett-db.appspot.com",
  messagingSenderId: "68309654392",
  appId: "1:68309654392:web:9ea3fc3ac3f7391025068d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
