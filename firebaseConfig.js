import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBa7Av7pzViBVTZlOx3cwPGUTTMjtNhE8Q",
  authDomain: "bana-ne-2dfd0.firebaseapp.com",
  projectId: "bana-ne-2dfd0",
  storageBucket: "bana-ne-2dfd0.appspot.com",
  messagingSenderId: "89508006884",
  appId: "1:89508006884:web:125b23fd83db129a1795f1",
  databaseURL: "https://bana-ne-2dfd0-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const database = getDatabase(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
