import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6_W1n3F0uOiI_HZhCFcPmg55rjc9ETFE",
  authDomain: "brames-3cf3b.firebaseapp.com",
  projectId: "brames-3cf3b",
  storageBucket: "brames-3cf3b.appspot.com",
  messagingSenderId: "316065203658",
  appId: "1:316065203658:web:2f8225fb95633b90057b33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
