import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC2ZuSIpMV_hVQWjmNvqR-uH76eZxDkgyY",
    authDomain: "qmart-6ecd3.firebaseapp.com",
    databaseURL: "https://qmart-6ecd3-default-rtdb.firebaseio.com",
    projectId: "qmart-6ecd3",
    storageBucket: "qmart-6ecd3.appspot.com",
    messagingSenderId: "834606578450",
    appId: "1:834606578450:web:6ba197ffafb4d206b6d1cb",
    measurementId: "G-Y6Q2VY6Y5Z"
  };

// Initializing the firebase app create new if does not exist yet
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage};