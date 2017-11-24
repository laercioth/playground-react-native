/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import WeatherTop from "./src/components/WeatherTop";
import WeatherMid from "./src/components/WeatherMid";
import WeatherBottom from "./src/components/WeatherBottom";
import GooglePlaceAutocomplete from "react-native-google-place-autocomplete";
import { Header, SearchBar } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class App extends Component {
  state = { result: "" };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          centerComponent={{ text: "Weather", style: { color: "#fff" } }}
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          innerContainerStyles={{ justifyContent: "space-around" }}
        />
        <SearchBar lightTheme placeholder="Typing the City ..." />

        <Grid>
          <Col>
            <Row style={{ backgroundColor: "yellow" }}>
              <Text>1</Text>
            </Row>
            <Row style={{ backgroundColor: "gray" }}>
              <Text>2</Text>
            </Row>
          </Col>
          <Col>
            <Row style={{ backgroundColor: "blue" }}>
              <Text>3</Text>
            </Row>
            <Row style={{ backgroundColor: "white" }}>
              <Text>4</Text>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}
