import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Picker, Platform } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={this.props.name}
          onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="600-000-000"
          value={this.props.phone}
          onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
        />
      </CardSection>

      <CardSection style={styles.pickerCardSectionStyle}>
        <Text style={styles.pickerTextStyle}>Shift</Text>
        <Picker
          selectedValue={this.props.shift}
          onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          style={styles.pickerStyle}
          //mode="dropdown"
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
      </View>
    );
  }
}
const styles = {
  pickerCardSectionStyle: {
    ...Platform.select({
      ios: {
        flexDirection: 'column'
      },
      android: {
        height: 55,
        alignItems: 'center'
      }
    })
  },
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  pickerStyle: {
    ...Platform.select({
      android: {
        flex: 2,
        margin: -8
      }
    })
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
