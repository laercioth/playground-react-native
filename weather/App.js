/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "./src/components/common";
import WeatherTop from "./src/components/WeatherTop";
import WeatherMid from "./src/components/WeatherMid";
import WeatherBottom from "./src/components/WeatherBottom";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Weather"} />
        <Text> Just a simple text!! </Text>
      </View>
    );
  }
}
