import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  render() {
    return (
      <View>
        <Text> EmployeeList </Text>
        <Text> EmployeeList </Text>
        <Text> EmployeeList </Text>
        <Text> EmployeeList </Text>
        <Text> EmployeeList </Text>
        <Text> EmployeeList </Text>
        <Text> EmployeeList </Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);
