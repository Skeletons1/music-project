import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDxxdRjopOlzQgNPvtoBRsLn7tbQvMmRww',
  authDomain: 'music-c759d.firebaseapp.com',
  projectId: 'music-c759d',
  storageBucket: 'music-c759d.appspot.com',
  appId: '1:204435835207:web:ca18cba60ec9f57fbd6462'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export { auth, db, usersCollection, songsCollection, commentsCollection, storage };
