import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB-b9sHNexzZ5eIB9Xowxs9CO85nwzuPHg',
  authDomain: 'e-commerce-project-db-3ced3.firebaseapp.com',
  databaseURL: 'https://e-commerce-project-db-3ced3.firebaseio.com',
  projectId: 'e-commerce-project-db-3ced3',
  storageBucket: 'e-commerce-project-db-3ced3.appspot.com',
  messagingSenderId: '484668995873',
  appId: '1:484668995873:web:56aa0cfa0d2d98e8a52660',
  measurementId: 'G-5V28W0ZF5G',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //getting data of firebase database
  //   console.log(userRef);
  // getting data of google account
  //   console.log(userAuth);

  const snapShot = await userRef.get();
  // check whether database has its account information
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.loog('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
