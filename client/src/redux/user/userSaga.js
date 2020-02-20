import { takeLatest, call, put, all } from 'redux-saga/effects';
import { UserActionTypes } from './userActionTypes';
import { auth, googleProvider, createUserProfDoc, getCurrentUser } from '../../firebase/firebaseUtils';
import { signInSuccess, signInError, signOutSuccess, signOutError, signUpSuccess, signUpError} from './userActions';

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOut),
        call(onSignUp),
        call(onSignUpSuccess)
    ]);
}

export function* getSnapShot(user, data){
    try{
        
        const userRef = data ? 
            yield call(createUserProfDoc, user, data) 
            :
            yield call(createUserProfDoc, user);
        
        const snapShot = yield userRef.get();

        yield put(signInSuccess({id: snapShot.id, ...snapShot.data()}));

    }catch(e){
       yield put(signInError(e.message));
    }
}

export function* onEmailSignInStart (){
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START, 
        signInWithEmail
    );
}

export function* signInWithEmail({payload: {email, password}}){
    //yield console.log('yo');

    try{
      
        const { user } = yield auth.signInWithEmailAndPassword(email, password)

        yield getSnapShot(user);

    }catch(e){
       yield put(signInError(e.message));
    }

    
}

export function* onGoogleSignInStart (){
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START, 
        signInWithGoogle
    );
}


export function* signInWithGoogle(){
    //yield console.log('yo');

    try{
      
        const { user } = yield auth.signInWithPopup(googleProvider);

        yield getSnapShot(user);

    }catch(e){
       yield put(signInError(e.message));
    }

    
}


export function* onCheckUserSession (){
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION, 
        checkUserSession
    );
}

export function* checkUserSession (){
    try{
      
        const user = yield getCurrentUser();

        if(!user) return;

        yield getSnapShot(user);

    }catch(e){
       yield put(signInError(e.message));
    }

}

export function* onSignOut(){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START, 
        signOut
    );

    
}

export function* signOut (){
    try{
      
        yield auth.signOut()

        yield put(signOutSuccess());

    }catch(e){
       yield put(signOutError(e.message));
    }

}

export function* onSignUp (){


    yield takeLatest(
        UserActionTypes.SIGN_UP_START, 
        signUp
    );
}


export function* signUp({
    payload: {  
        displayName,
        email,
        password
      }
}){
    //yield console.log('yo');

    try{

        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
 
        yield put(signUpSuccess({user,displayName}));         

    }catch(e){
       yield put(signUpError(e.message));
    }

    
}


export function* onSignUpSuccess (){


    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS, 
        signUpSuccessLogin
    );
}


export function* signUpSuccessLogin( {payload:{
    user,
    displayName
}
  }){
    //yield console.log('yo');

    try{
        console.log('signed up!');
        //console.log(displayName);

        yield getSnapShot(user, {displayName});
     

    }catch(e){
       yield put(signUpError(e.message));
    }

    
}

