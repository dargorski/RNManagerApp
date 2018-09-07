import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Spinner, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { isConfirmVisible: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    console.log(this.props.employee.uid);
    this.props.employeeDelete(this.props.employee.uid);
    this.setState({ isConfirmVisible: false });
  }

  onDecline() {
    this.setState({ isConfirmVisible: false });
  }


  renderSpinner() {
    if (this.props.loading) {
      return (
        <CardSection>
        <Spinner />
        </CardSection>
      );
    }
 return (
   <Button whenPressed={this.onButtonPress.bind(this)}>
     Save
   </Button>
    );
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          {this.renderSpinner()}
        </CardSection>
        <CardSection>
          <Button whenPressed={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button
            whenPressed={() => this.setState({
            isConfirmVisible: true })}
          >
            Fire employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.isConfirmVisible}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure You want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, loading } = state.employeeForm;

  return { name, phone, shift, loading };
};

export default connect(mapStateToProps, {
  employeeUpdate,
   employeeSave,
   employeeDelete })(EmployeeEdit);
