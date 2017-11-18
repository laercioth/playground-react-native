import _ from 'lodash';
import React, { Component } from "react";
import { ListView, View, Text } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../actions";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  // nextProps are the next set of props that this componentWillMount
  //will be rendered cloneWithRows
  //this.props is still the old set of props
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>asdadasd</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
