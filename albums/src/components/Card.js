// Import libraries for making a component
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Make a component
const Card = (prop) => {
  return (
    <View style={styles.container}>
      {prop.children}
    </View>
  );
};

// StyleSheet
const styles = StyleSheet.create({
	container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

// Make the component available to other parts of the app
export default Card;
