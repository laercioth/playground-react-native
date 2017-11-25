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
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class App extends Component {
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
        <SearchBar placeholder="Typing your city here ..." />

        <Grid>
          <Row>
            <Grid>
              <Col size={1}>
                <Text
                  style={{
                    fontSize: 50,
                    padding: 5,
                    marginLeft: 20,
                    marginTop: 10,
                    fontWeight: "bold"
                  }}
                >
                  16
                  <MaterialCommunityIcons
                    name="temperature-celsius"
                    size={40}
                    color="#000"
                  />
                </Text>
                <Text
                  style={{ fontSize: 30, paddingLeft: 20, fontWeight: "bold" }}
                >
                  Tuesneday
                </Text>
              </Col>

              <Col size={1}>
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    margin: 10,
                    marginLeft: 50
                  }}
                  source={{
                    uri: "https://cdn.apixu.com/weather/128x128/night/116.png"
                  }}
                />
              </Col>
            </Grid>
          </Row>

          {/* GRID HUMIDITY */}
          <Row size={0.7}>
            <Grid>
              <Col size={1} style={{ padding: 15 }}>
                <Grid>
                  <Row>
                    <Col size={1}>
                      <Ionicons
                        name="ios-water-outline"
                        size={35}
                        color="#0074D6"
                        style={{ marginLeft: 10 }}
                      />
                    </Col>
                    <Col size={1}>
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: "center",
                          marginTop: 8
                        }}
                      >
                        400
                        <MaterialCommunityIcons
                          name="percent"
                          size={15}
                          color="#000"
                        />
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col size={1} style={{ marginTop: 5 }}>
                      <Feather
                        name="wind"
                        style={{ marginLeft: 10 }}
                        size={35}
                        color="#d1d2d3"
                      />
                    </Col>
                    <Col size={1}>
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: "center",
                          marginTop: 10
                        }}
                      >
                        200 km/h
                      </Text>
                    </Col>
                  </Row>
                </Grid>
              </Col>
              <Col size={1} style={{ backgroundColor: "gray" }} />
            </Grid>
          </Row>
          <Row>
            <Grid>
              <Col size={1} style={{ backgroundColor: "blue" }} />
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
