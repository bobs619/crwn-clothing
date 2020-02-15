import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCRZo84RE5nbf80qahsYPXvK3lJ_j1zRcc",
    authDomain: "crwn-db-f948f.firebaseapp.com",
    databaseURL: "https://crwn-db-f948f.firebaseio.com",
    projectId: "crwn-db-f948f",
    storageBucket: "crwn-db-f948f.appspot.com",
    messagingSenderId: "228653487528",
    appId: "1:228653487528:web:e685295126797e1741f99d",
    measurementId: "G-MWXLZ98NW9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const createUserProfDoc = async(user, data) => {
    if(!user) return;

    const userRef = fireStore.doc(`users/${user.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){

        const { displayName, email } = user;
        const created = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                created,
                ...data
            });
        }catch(err){
            //console.log('err creating user', err.message)
        }
    }

    return userRef;


}

export default firebase;