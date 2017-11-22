/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Header } from "./src/components/common";
import WeatherTop from "./src/components/WeatherTop";
import WeatherMid from "./src/components/WeatherMid";
import WeatherBottom from "./src/components/WeatherBottom";
import GooglePlaceAutocomplete from "react-native-google-place-autocomplete";

export default class App extends Component {
  state = { result: ''}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Weather"} />
        <GooglePlaceAutocomplete
          googleAPIKey="AIzaSyDN3dEHSb6IWD9uuQBRlt43K6_A0FpLAeg"
          onResult={result => console.log}
          placeholder="Type to search..."
        />
      </View>
    );
  }
}
