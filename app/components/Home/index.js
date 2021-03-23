import React, { Component } from 'react';
import { View, TextInput, Button, Text, Alert, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont(); //Load icon

class Home extends Component {
  constructor (){
    super() 
    this.state = {
      data: [],
    }

  }

componentDidMount()  {
  this.fetchData();
}
 
fetchData = async() => {
  const response = await fetch('http://54.172.198.142/wp-json/wl/v1/reminder');
  const reminder = await response.json();
  this.setState({data: reminder});
};

deleteData = async(id) => {
   await fetch(`http://54.172.198.142/wp-json/wl/v1/deletereminder`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ 
      id: id, 
   }), 
   })
  .then(response => response.json())
  .then(
    (data) => {
        // alert(data.message);
        Actions.home();
    },
    (err) => {
      alert(err.message);
    });
};

 getTime = (time) => {
   return moment(time).format("HH:mm A");
 }


_renderItem = (item) => {
  let list = [
    { label: "Don't repeat", value: "dontrepeat" },
    { label: "Every day", value: "day" },
    { label: "Every week", value: "week" },
    { label: "Every month", value: "month" },
    { label: "Every year", value: "year" },
  ];
  let repeat = '';
  /// get label name 
  list.map((oneElement) => {
    if(oneElement.value == item.repeat_when) {
      repeat = oneElement.label;
    }
  });

return (
  <View style={styles.reminder}>
    <Text style={styles.label}>{item.label}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <View style={styles.reminderTime}>
      <View>
      <Text style={styles.reminderTimeText}>{this.getTime(item.time_reminder)}</Text>
      <Text style={styles.repeatText}>{repeat}</Text>
      </View>
      <View style={styles.reminderActions} >
        <TouchableOpacity style={{padding: 5}} onPress = {() => Actions.addReminder({ id: item.id, user_id: 1})} >
        <Icon type="FontAwesome" style={styles.startIcon} name="edit"/>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 5}} onPress = {() => this.deleteData(item.id)} >
        <Icon type="FontAwesome" style={styles.startIcon} name="trash-o"/>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
};

render() {
  let { data } = this.state;
return (
<View style={styles.MainContainer}>
  <View style={styles.header}>
    <TouchableOpacity onPress={() => Actions.otpModule()}>
      <Icon type="FontAwesome" style={styles.startIcon} name="plus"/>
    </TouchableOpacity>
    <Text style= {styles.title}>Reminders</Text>
    <TouchableOpacity onPress={() => Actions.addReminder()}>
      <Icon type="FontAwesome" style={styles.startIcon} name="plus"/>
    </TouchableOpacity>
  </View>
  <FlatList
    data={data}
    keyExtractor={(x,i)=> i}
    renderItem={({item}) => this._renderItem(item)}
  />
</View>
            
    );
  }
}
 

export default Home;

