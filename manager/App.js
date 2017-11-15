
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
