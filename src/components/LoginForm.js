import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ActivityIndicator
 } from 'react-native';
import { connect } from 'react-redux';
import { loggedin, attempt, errors, login } from '../actions';


class LoginForm extends Component {
  onPress() {
    this.props.login();
  }

  renderButton() {
    if (this.props.fetching) {
      return (<ActivityIndicator
      style={styles.spinnerStyle}
      color={'#ffffff'}
      size='large'
      />);
    }
    return (
      <TouchableOpacity
      onPress={this.onPress.bind(this)}
      style={styles.facebookButtonContainer}
      >
        <Text style={styles.buttonText}>Log in using Facebook</Text>
      </TouchableOpacity>
    );
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
          {this.renderButton()}
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
  spinnerStyle: {
    marginBottom: 150
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

const mapStateToProps = ({ auth, profile }) => {
  const { fetching, fetched, error } = auth;
  const { id, name } = profile;
  return { fetching, fetched, error, id, name };
};

export default connect(mapStateToProps, { loggedin, errors, attempt, login })(LoginForm);
