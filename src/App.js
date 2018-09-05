import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCE_FdBLR7sMH7Q7Tcw4YnxlBuh3DqEeRw',
    authDomain: 'manager-15ee0.firebaseapp.com',
    databaseURL: 'https://manager-15ee0.firebaseio.com',
    projectId: 'manager-15ee0',
    storageBucket: 'manager-15ee0.appspot.com',
    messagingSenderId: '185921935406'
  };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
