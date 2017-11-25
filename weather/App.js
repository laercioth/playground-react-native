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
          centerComponent={{
            text: "Weather",
            style: { color: "#fff", fontSize: 20 }
          }}
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          innerContainerStyles={{ justifyContent: "space-around" }}
        />
        <SearchBar placeholder="Type Here..." />

        <Grid>
          <Row>
            <Grid>
              <Col size={1}>
                <Text style={{ fontSize: 50, padding: 5, marginLeft: 20, marginTop: 10, fontWeight: "bold" }}>
                  16˚C
                </Text>
                <Text
                  style={{ fontSize: 30, paddingLeft: 20, fontWeight: "bold" }}
                >
                  Tuesneday
                </Text>
              </Col>

              <Col size={1}>
                <Image
                  style={{ width: 120, height: 120, margin: 10, marginLeft: 50 }}
                  source={{ uri: 'https://cdn.apixu.com/weather/128x128/night/116.png' }}
                />
              </Col>
            </Grid>
          </Row>
          <Row>
            <Grid>
              <Col size={1} style={{ backgroundColor: "blue" }}>
                
              </Col>
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
