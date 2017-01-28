import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image
 } from 'react-native';

import firebase from 'firebase';

const FBSDK = require('react-native-fbsdk');

const { LoginManager, AccessToken } = FBSDK;

const provider = firebase.auth.FacebookAuthProvider;

export default class LoginForm extends Component {
  fbAuth() {
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

  render() {
    return (
      <View style={styles.container1}>
        <StatusBar
          barStyle='light-content'
        />
        <View style={styles.container1}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../images/lightbulb.png')}
            />
            <Text style={styles.title}>Welcome to React</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={this.fbAuth.bind(this)}
          style={styles.facebookButtonContainer}
          >
            <Text style={styles.buttonText}>Log in using Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container1: {
    flex: 1,
    backgroundColor: 'rgb(207, 0, 15)'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 112,
    height: 190,
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'transparent',
    marginBottom: 20,
    color: '#FFF',
    paddingLeft: 5,
  },
  buttonContainer: {
    paddingVertical: 15,
    borderRadius: 5,
    padding: 20

  },
  facebookButtonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 150,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  marginText: {
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.9,
    padding: 0,
    fontWeight: '900'
  },
  signUpText: {
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.9,
    marginTop: 10
  }
};
