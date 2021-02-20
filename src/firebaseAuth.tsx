import { FunctionComponent, useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase } from '../src/initFirebase';

const firebaseAuthConfig = {
    signInFlow: 'popup',
    signInOption : [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
        {
            provider: firebase.auth.GithubAuthProvider.PROVIDER_ID
        }
    ],
    signInSuccessUrl: '/'
};

const FirebaseAuth: FunctionComponent = () => {
    return(
        <div>
            <StyledFirebaseAuth 
                uiConfig={firebaseAuthConfig} 
                firebaseAuth={firebase.auth()}
            />
        </div>
    );
}

export default FirebaseAuth;
