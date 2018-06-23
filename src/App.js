import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
} from 'react-native-dotenv';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
