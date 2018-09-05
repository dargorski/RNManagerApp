import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="root"
        hideNavBar
      >

        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
            titleStyle={{ textAlign: 'center', flex: 1 }}
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            titleStyle={{ textAlign: 'center', flex: 1 }}
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate(); }}
            rightButtonStyle={{ right: 0 }}
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            titleStyle={{ textAlign: 'center', flex: 1 }}
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
