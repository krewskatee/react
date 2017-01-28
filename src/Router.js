import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js';
import MainScreen from './components/MainScreen.js';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='login' component={LoginForm} hideNavBar initial />
      <Scene key='main' component={MainScreen} hideNavBar />
    </Router>
  );
};

export default RouterComponent;
