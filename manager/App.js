
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

export default class App extends Component<{}> {

  componetWillMount() {
    const config = {
      apiKey: 'AIzaSyAXW7DgQGeEc_XB2RWQpeSffpjQEvaeZNI',
      authDomain: 'manager-b50d5.firebaseapp.com',
      databaseURL: 'https://manager-b50d5.firebaseio.com',
      projectId: 'manager-b50d5',
      storageBucket: 'manager-b50d5.appspot.com',
      messagingSenderId: '462436493651'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
