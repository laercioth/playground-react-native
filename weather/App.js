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
          <Row>
            <Grid>
              <Col size={1} style={{ backgroundColor: "pink" }} />
              <Col size={1} style={{ backgroundColor: "green" }} />
            </Grid>
          </Row>
          <Row>
            <Grid>
              <Col size={1} style={{ backgroundColor: "blue" }} />
              <Col size={1} style={{ backgroundColor: "yellow" }} />
            </Grid>
          </Row>
          <Row>
            <Grid>
              <Col size={1} style={{ backgroundColor: "orange" }} />
              <Col size={1} style={{ backgroundColor: "gray" }} />
            </Grid>
          </Row>
          <Row>
            <Grid>
              <Col size={1} style={{ backgroundColor: "white" }} />
              <Col size={1} style={{ backgroundColor: "red" }} />
            </Grid>
          </Row>
        </Grid>
      </View>
    );
  }
}
