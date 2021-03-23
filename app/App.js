import React, { Component } from 'react';
// import { Provider } from "react-redux";
// import configureStore from "@lib/configureStore";
import { Scene, Router } from "react-native-router-flux";
import AddReminder from './components/AddReminder';
import Home from './components/Home';
import OtpModule from './components/OtpModule';
import VerifyOtp from './components/VerifyOtp';
// let store = configureStore();

class App extends Component {
  render() {
    return (
      //enclose route with a state store.
      // <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key = "home" component = {Home} hideNavBar={true} initial = {true} title = "Home" />
            <Scene key = "addReminder" component = {AddReminder} options={{headerShown: true}}  title = "Add Reminder" />
            <Scene key = "otpModule" component = {OtpModule}  options={{headerShown: true}} title = "Otp" />
            <Scene key = "verifyOtp" component = {VerifyOtp} options={{headerShown: true}}  title = "Verify Otp" />
          </Scene>
        </Router>
      // </Provider>
    );
  }
}

export default App

