



import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore'



//require("dotenv").config()


const app = firebase.initializeApp({
    
  apiKey: "AIzaSyDxFuYvYPsm53Q_5uvq5GZmy9qefOi7t_U",
  authDomain: "trip-advisor-2759d.firebaseapp.com",
  projectId: "trip-advisor-2759d",
  storageBucket: "trip-advisor-2759d.appspot.com",
  messagingSenderId: "756306939148",
  appId: "1:756306939148:web:362df3149468ebde6f8d29",
  measurementId: "G-5SLMPW8877"




  /*     apiKey: "AIzaSyCqG_1hm7AJN58pyBj_lbMecOtwP2NXbzQ",
    authDomain: "taxis-stackblitz.firebaseapp.com",
    projectId: "taxis-stackblitz",
    storageBucket: "taxis-stackblitz.appspot.com",
    messagingSenderId: "977311415632",
    appId: "1:977311415632:web:c4a419e65259ff87fa8055"
  




  apiKey: `${ process.env.REACT_APP_API_KEY }` ,
    authDomain: `${ process.env.REACT_APP_AUTH_DOMAIN }` ,
    projectId: `${ process.env.REACT_APP_PROJECT_ID }` ,
    storageBucket: `${ process.env.REACT_APP_STORAGE_BUCKET }` ,
    messagingSenderId: `${ process.env.REACT_APP_MESSAGING_SENDER_ID }` ,
    appId: `${ process.env.REACT_APP_APP_ID }` */
});



const db = getFirestore(app)
export default db

