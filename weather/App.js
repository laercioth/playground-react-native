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
import { Header, SearchBar } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInputMask } from "react-native-masked-text";
import Moment from "moment";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { responseJson: null, city: "" };
  }
  search() {
    return fetch(
      "https://api.apixu.com/v1/forecast.json?key=5293b35003bf4336bf3230844171011&q=" +
        this.state.city +
        "&days=7"
    )
      .then(response => response.json())
      .then(responseJson => {
        return this.setState({ responseJson: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }

  _changeText(value) {
    this.setState({ city: value });
    this.props.onChangeText ? this.props.onChangeText(value) : null;
  }

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
        <SearchBar
          autoFocus
          round
          clearIcon={{ color: "#86939e" }}
          autoCapitalize="sentences"
          autoCorrect={false}
          keyboardType="default"
          onChangeText={this._changeText.bind(this)}
          placeholder="Typing your city here ..."
          onSubmitEditing={() => this.search()}
        />

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
                  {this.state.responseJson === null ? (
                    <Text> -- </Text>
                  ) : (
                    this.state.responseJson.current.temp_c
                  )}
                  <MaterialCommunityIcons
                    name="temperature-celsius"
                    size={40}
                    color="#000"
                  />
                </Text>

                {this.state.responseJson === null ? (
                  <Text
                    style={{
                      fontSize: 30,
                      paddingLeft: 40,
                      paddingTop: 15,
                      fontWeight: "bold"
                    }}
                  >
                    --
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 20,
                      paddingLeft: 30,
                      paddingTop: 15,
                      fontWeight: "bold"
                    }}
                  >
                    {Moment(this.state.responseJson.localtime).format(
                      "DD/MM/YYYY"
                    )}
                  </Text>
                )}
              </Col>

              <Col size={1}>
                {this.state.responseJson === null ? (
                  <Text />
                ) : (
                  <Image
                    style={{
                      width: 120,
                      height: 120,
                      margin: 10,
                      marginLeft: 50
                    }}
                    source={{
                      uri:
                        "https:" +
                        this.state.responseJson.current.condition.icon
                    }}
                  />
                )}
              </Col>
            </Grid>
          </Row>

          {/* GRID HUMIDITY */}
          <Row size={0.7}>
            <Grid>
              <Col size={1} style={{ padding: 10 }}>
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
                        {this.state.responseJson === null ? (
                          <Text> -- </Text>
                        ) : (
                          this.state.responseJson.current.humidity
                        )}
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
                        {this.state.responseJson === null ? (
                          <Text> -- </Text>
                        ) : (
                          this.state.responseJson.current.wind_kph
                        )}{" "}
                        km/h
                      </Text>
                    </Col>
                  </Row>
                </Grid>
              </Col>
              <Col size={1} style={{ padding: 15 }}>
                <Grid>
                  <Row>
                    <Col size={1}>
                      <FontAwesome
                        name="arrow-up"
                        size={35}
                        color="#d1d2d3"
                        style={{ marginLeft: 15 }}
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
                        {this.state.responseJson === null ? (
                          <Text> -- </Text>
                        ) : (
                          this.state.responseJson.forecast.forecastday[0].day
                            .maxtemp_c
                        )}
                        <MaterialCommunityIcons
                          name="temperature-celsius"
                          size={18}
                          color="#000"
                        />
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col size={1} style={{ marginTop: 5 }}>
                      <FontAwesome
                        name="arrow-down"
                        style={{ marginLeft: 15 }}
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
                        {this.state.responseJson === null ? (
                          <Text> -- </Text>
                        ) : (
                          this.state.responseJson.forecast.forecastday[0].day
                            .mintemp_c
                        )}
                        <MaterialCommunityIcons
                          name="temperature-celsius"
                          size={18}
                          color="#000"
                        />
                      </Text>
                    </Col>
                  </Row>
                </Grid>
              </Col>
            </Grid>
          </Row>

          {/* GRIDS DAYS */}
          <Row style={{ paddingTop: 15 }}>
            <Grid>
              <Col size={0.17}>
                <Row size={0.5}>
                  <Text
                    style={{
                      fontSize: 19,
                      paddingLeft: 5,
                      fontWeight: "bold"
                    }}
                  >
                    {this.state.responseJson === null ? (
                      <Text> -- </Text>
                    ) : (
                      this.state.responseJson.forecast.forecastday[1].day
                        .avgtemp_c
                    )}
                    <MaterialCommunityIcons
                      name="temperature-celsius"
                      size={15}
                      color="#000"
                    />
                  </Text>
                </Row>
                <Row>
                  {this.state.responseJson === null ? (
                    <Text />
                  ) : (
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        marginLeft: 5
                      }}
                      source={{
                        uri:
                          "https:" +
                          this.state.responseJson.forecast.forecastday[1].day
                            .condition.icon
                      }}
                    />
                  )}
                </Row>
              </Col>
              <Col size={0.17}>
                <Row size={0.5}>
                  <Text
                    style={{
                      fontSize: 19,
                      paddingLeft: 5,
                      fontWeight: "bold"
                    }}
                  >
                    {this.state.responseJson === null ? (
                      <Text> -- </Text>
                    ) : (
                      this.state.responseJson.forecast.forecastday[2].day
                        .avgtemp_c
                    )}
                    <MaterialCommunityIcons
                      name="temperature-celsius"
                      size={15}
                      color="#000"
                    />
                  </Text>
                </Row>
                <Row>
                  {this.state.responseJson === null ? (
                    <Text />
                  ) : (
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        marginLeft: 5
                      }}
                      source={{
                        uri:
                          "https:" +
                          this.state.responseJson.forecast.forecastday[2].day
                            .condition.icon
                      }}
                    />
                  )}
                </Row>
              </Col>
              <Col size={0.17}>
                <Row size={0.5}>
                  <Text
                    style={{
                      fontSize: 19,
                      paddingLeft: 5,
                      fontWeight: "bold"
                    }}
                  >
                    {this.state.responseJson === null ? (
                      <Text> -- </Text>
                    ) : (
                      this.state.responseJson.forecast.forecastday[3].day
                        .avgtemp_c
                    )}
                    <MaterialCommunityIcons
                      name="temperature-celsius"
                      size={16}
                      color="#000"
                      style={{
                        fontWeight: "bold"
                      }}
                    />
                  </Text>
                </Row>
                <Row>
                  {this.state.responseJson === null ? (
                    <Text />
                  ) : (
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        marginLeft: 5
                      }}
                      source={{
                        uri:
                          "https:" +
                          this.state.responseJson.forecast.forecastday[3].day
                            .condition.icon
                      }}
                    />
                  )}
                </Row>
              </Col>
              <Col size={0.17}>
                <Row size={0.5}>
                  <Text
                    style={{
                      fontSize: 19,
                      paddingLeft: 5,
                      fontWeight: "bold"
                    }}
                  >
                    {this.state.responseJson === null ? (
                      <Text> -- </Text>
                    ) : (
                      this.state.responseJson.forecast.forecastday[4].day
                        .avgtemp_c
                    )}
                    <MaterialCommunityIcons
                      name="temperature-celsius"
                      size={13}
                      color="#000"
                    />
                  </Text>
                </Row>
                <Row>
                  {this.state.responseJson === null ? (
                    <Text />
                  ) : (
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        marginLeft: 5
                      }}
                      source={{
                        uri:
                          "https:" +
                          this.state.responseJson.forecast.forecastday[4].day
                            .condition.icon
                      }}
                    />
                  )}
                </Row>
              </Col>
              <Col size={0.17}>
                <Row size={0.5}>
                  <Text
                    style={{
                      fontSize: 19,
                      paddingLeft: 5,
                      fontWeight: "bold"
                    }}
                  >
                    {this.state.responseJson === null ? (
                      <Text> -- </Text>
                    ) : (
                      this.state.responseJson.forecast.forecastday[6].day
                        .avgtemp_c
                    )}
                    <MaterialCommunityIcons
                      name="temperature-celsius"
                      size={13}
                      color="#000"
                    />
                  </Text>
                </Row>
                <Row>
                  {this.state.responseJson === null ? (
                    <Text />
                  ) : (
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        marginLeft: 5
                      }}
                      source={{
                        uri:
                          "https:" +
                          this.state.responseJson.forecast.forecastday[5].day
                            .condition.icon
                      }}
                    />
                  )}
                </Row>
              </Col>
              <Col size={0.17}>
                <Row size={0.5}>
                  <Text
                    style={{
                      fontSize: 19,
                      paddingLeft: 5,
                      fontWeight: "bold"
                    }}
                  >
                    {this.state.responseJson === null ? (
                      <Text> -- </Text>
                    ) : (
                      this.state.responseJson.forecast.forecastday[6].day
                        .avgtemp_c
                    )}
                    <MaterialCommunityIcons
                      name="temperature-celsius"
                      size={13}
                      color="#000"
                    />
                  </Text>
                </Row>
                <Row>
                  {this.state.responseJson === null ? (
                    <Text />
                  ) : (
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        marginLeft: 5,
                        paddingBottom: 10
                      }}
                      source={{
                        uri:
                          "https:" +
                          this.state.responseJson.forecast.forecastday[6].day
                            .condition.icon
                      }}
                    />
                  )}
                </Row>
              </Col>
            </Grid>
          </Row>
          <Row size={0.7}>
            <Grid>
              <Col>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      marginBottom: 10,
                      fontWeight: "bold"
                    }}
                  >
                    {this.state.responseJson === null
                      ? "--"
                      : this.state.responseJson.location.name +
                        " - " +
                        this.state.responseJson.location.country}
                  </Text>
                </View>
              </Col>
            </Grid>
          </Row>
        </Grid>
      </View>
    );
  }
}
