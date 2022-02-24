import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDWHhAy98EMZ-Vk7ElY_glHuuANqKf_NqI",
  authDomain: "alexir-20b4e.firebaseapp.com",
  projectId: "alexir-20b4e",
  storageBucket: "alexir-20b4e.appspot.com",
  messagingSenderId: "462965852930",
  appId: "1:462965852930:web:82a7a3c8108620ca7f901b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };