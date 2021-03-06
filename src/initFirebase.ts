import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

function initFirebase() {
    // Check if Firebase is already initialized
    if (!firebase.apps.length) { // Be careful, it's `firebase.apps` instead of `firebase.app` !
        firebase.initializeApp(config);
    }
}

initFirebase();

export { firebase };
