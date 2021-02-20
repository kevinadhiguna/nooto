import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
    projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

function initFirebase() {
    // Check if Firebase is already initialized
    if (!firebase.app.length) {
        firebase.initializeApp(config);
    }
}

initFirebase();

export { firebase };
