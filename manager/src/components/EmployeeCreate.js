import React, { Component } from "react";
import { Picker, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Card, CardSection, Input, Button } from "./common";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jhon"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="(34) 90000-0000"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection style={{ marginTop: 210 }}>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

// StyleSheet
const styles = StyleSheet.create({
  pickerStyle: {
    fontSize: 18,
    paddingLeft: 20,
    alignSelf: "center"
  }
});

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
