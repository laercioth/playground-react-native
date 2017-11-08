/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBPxshw4sVC_nsdMsYEjBewuWxqAgsM6kY',
      authDomain: 'auth-62e00.firebaseapp.com',
      databaseURL: 'https://auth-62e00.firebaseio.com',
      projectId: 'auth-62e00',
      storageBucket: 'auth-62e00.appspot.com',
      messagingSenderId: '670057212922'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}
