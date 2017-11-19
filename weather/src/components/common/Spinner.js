// Import libraries for making a component
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

// StyleSheet
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

// Make the component available to other parts of the app
export { Spinner };
