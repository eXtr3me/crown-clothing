import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA1mYsyRzJ4AHBw8oDOcilv9ObhWw6xHxs',
  authDomain: 'crown-db-ded1b.firebaseapp.com',
  databaseURL: 'https://crown-db-ded1b.firebaseio.com',
  projectId: 'crown-db-ded1b',
  storageBucket: 'crown-db-ded1b.appspot.com',
  messagingSenderId: '45870619350',
  appId: '1:45870619350:web:f23b7e02b0db19d4cdc777',
  measurementId: 'G-T2BLJT9KPZ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
