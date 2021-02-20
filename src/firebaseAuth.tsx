import { FunctionComponent, useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui';
import firebase from 'firebase/app';
import 'firebase/auth';

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
