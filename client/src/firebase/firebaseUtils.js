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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


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

export const addCollection = async (key, obj) => {
    const collectionRef = fireStore.collection(key);

    console.log(collectionRef);

    const batch = fireStore.batch();

    obj.forEach(x=>{
        const ref = collectionRef.doc();

        batch.set(ref, x);
    });

    return await batch.commit();
}

export const convertCollectionToSnapShop = (coll) => {

    //console.log('yo');
    const trans = coll.docs.map(x=>{
        const {title, items} = x.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: x.id,
            title,
            items
        }
    });

    return trans.reduce((x,y)=>{
        x[y.title.toLowerCase()] = y;

        return x;
    },{});
}

export const getCurrentUser = () => {
    return new Promise((resolve,reject)=>{
        const unsbuscribe = auth.onAuthStateChanged(userAuth => {
            unsbuscribe();
            resolve(userAuth);
        }, reject)
    })
}

export default firebase;