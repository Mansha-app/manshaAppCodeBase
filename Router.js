import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import AddReminder from './app/components/AddReminder';
import SelectRepeat from '.app/components/SelectRepeat';

const Routes = () => (
   <Router>
      <Scene key = "root">
         {/* <Scene key = "addReminder" component = {AddReminder} hideNavBar={true} title = "AddReminder" initial = {true} /> */}
         <Scene key = "addReminder" component = {AddReminder} hideNavBar={true} title = "AddReminder" />
         <Scene key = "selectRepeat" component = {AddReminder} hideNavBar={true} title = "AddReminder" />
      </Scene>
   </Router>
)
export default Routes