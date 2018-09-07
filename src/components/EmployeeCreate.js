import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  renderSpinner() {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    }
 return (
   <Button whenPressed={this.onButtonPress.bind(this)}>
     Create
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
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift, loading } = state.employeeForm;

  return { name, phone, shift, loading };
};

export default connect(mapStateToProps, {
   employeeUpdate,
   employeeCreate
  })(EmployeeCreate);
