// Import libraries for making a component
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// Make a component
const Button = ({ onPress, children }) => {

  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  );
};

// StyleSheet
const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5
  }
});

// Make the component available to other parts of the app
export { Button };
