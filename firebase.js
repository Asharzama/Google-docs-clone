// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCURoL9I7Egv3YsdExkdMw8t8sCMOOEeD0",
//   authDomain: "docs-clone-1e400.firebaseapp.com",
//   projectId: "docs-clone-1e400",
//   storageBucket: "docs-clone-1e400.appspot.com",
//   messagingSenderId: "507346396395",
//   appId: "1:507346396395:web:fdcd8a6cfbeb95891f0aae",
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export { db };

// Import the necessary Firebase SDKs
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCURoL9I7Egv3YsdExkdMw8t8sCMOOEeD0",
  authDomain: "docs-clone-1e400.firebaseapp.com",
  projectId: "docs-clone-1e400",
  storageBucket: "docs-clone-1e400.appspot.com",
  messagingSenderId: "507346396395",
  appId: "1:507346396395:web:fdcd8a6cfbeb95891f0aae",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}