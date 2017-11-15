import {  EMAIL_CHANGED,
          PASSWORD_CHANGED
        } from '../actions/types';
import firebase from 'firebase';

const INITIAL_STATE = {
  email: '' ,
  password: ''
};

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const loginUser = ({ email, password}) => {
  firebase.auth().signInWithEmailAndPassword(email, passwrd)
    .then( user => console.long(user));

};
