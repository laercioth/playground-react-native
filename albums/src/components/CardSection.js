// Import libraries for making a component
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (prop) => {
  return (
    <View style={styles.container}>
      {prop.children}
    </View>
  );
};

// StyleSheet
const styles = StyleSheet.create({
	container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
});

// Make the component available to other parts of the app
export default CardSection;
