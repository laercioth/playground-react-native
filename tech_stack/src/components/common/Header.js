// Import libraries for making a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make a component
const Header = (prop) => {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>{prop.headerText}</Text>
		</View>
	);
};

// StyleSheet
const styles = StyleSheet.create({
	container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
	textStyle: {
    fontSize: 30
  }
});

// Make the component available to other parts of the app
export { Header };
