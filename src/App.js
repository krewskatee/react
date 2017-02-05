import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

const middleware = applyMiddleware(thunk);
const loggerware = applyMiddleware(logger());

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAXm2eeq7HQEwWT5cDppdUlInttG2LkIJ4',
      authDomain: 'reactapp-5eda5.firebaseapp.com',
      databaseURL: 'https://reactapp-5eda5.firebaseio.com',
      storageBucket: 'reactapp-5eda5.appspot.com',
      messagingSenderId: '737496181379'
};
firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, middleware, loggerware);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
