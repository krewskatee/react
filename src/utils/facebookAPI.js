import firebase from 'firebase';
import { config } from '../config';

const FBSDK = require('react-native-fbsdk');

const { LoginManager, AccessToken } = FBSDK;
const provider = firebase.auth.FacebookAuthProvider;

export function facebookLogin() {
  LoginManager.logInWithReadPermissions(['public_profile'])
  .then(loginResult => {
      if (loginResult.isCancelled) {
          console.log('user canceled');
          return;
      }
      AccessToken.getCurrentAccessToken()
      .then(accessTokenData => {
          const credential = provider.credential(accessTokenData.accessToken);
          return firebase.auth().signInWithCredential(credential);
      })
      .then(credData => {
          console.log(credData);
      })
      .catch(err => {
          console.log(err);
      });
  });
}
