import firebase from 'firebase';
import { config } from '../config';
import { Actions } from 'react-native-router-flux';

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const FBSDK = require('react-native-fbsdk');

const { LoginManager, AccessToken } = FBSDK;
const provider = firebase.auth.FacebookAuthProvider;

export function attempt() {
  return {
    type: LOGIN_USER
  };
}

export function loggedin() {
  return {
    type: LOGIN_USER_SUCCESS
  };
}

export function errors() {
  return {
    type: LOGIN_USER_FAIL,
  };
}


export function login() {
  return dispatch => {
    dispatch(attempt());
    LoginManager.logInWithReadPermissions(config.facebookReadPermissions)
    .then(loginResult => {
        if (loginResult.isCancelled) {
            dispatch(errors());
        }
        AccessToken.getCurrentAccessToken()
        .then(accessTokenData => {
            const credential = provider.credential(accessTokenData.accessToken);
            return firebase.auth().signInWithCredential(credential);
        })
        .then(() => {
            dispatch(loggedin());
            Actions.main();
        })
        .catch(() => {
            dispatch(errors());
        });
    });
  };
}
