import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, Platform} from 'react-native';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { Actions } from 'react-native-router-flux';
import base64 from 'react-native-base64';
import RNPickerSelect from "react-native-picker-select";

export default class AddReminder extends Component {
  
  constructor(props) {
    super()
    this.state = {
      label: '',
      description: '',
      time:  new Date(),
      repeat: '',
      show: 'true',
      id: props.id,
      user: props.user_id
    }
  }

  componentDidMount()  {
    let { id } = this.state;
    if(id) this.editData(id);
  }

  editData = async(id) => {  
    await fetch(`http://54.172.198.142/wp-json/wl/v1/getOneReminder`, {
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
        this.setState({
          label: data.label,
          description: data.description,
          repeat: data.repeat_when,
          user: data.user_id
        });
      },
      (err) => {
        alert(err.message);
      });
  };

editReminder = (id) => {
  let { label, time, description, repeat } = this.state;
  const auth = base64.encode(`user:emUdZewyaHb6`);
  console.log("asbdhjknamlsd", time);
  fetch('http://54.172.198.142/wp-json/wl/v1/editreminder', {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
       Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      label: label,
      description: description,
      time: time,
      repeat: repeat,
      id: id
    })
  })
  .then(data => {
    if(data.status == 200) {
    alert("Reminder edited Successfully.");
    Actions.home();
    }
  })  
  .catch((error) => {
        console.error(error);
    });
};

addReminder = () => {
  let { label, time, description, repeat } = this.state;
  //const auth = base64.encode(`${Config.WP_USERNAME}:${Config.WP_PASSWORD}`);
  const auth = base64.encode(`user:emUdZewyaHb6`);

  fetch('http://54.172.198.142/wp-json/wl/v1/addreminder', {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
       Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      label: label,
      description: description,
      time: time,
      repeat: repeat
    })
  })
  .then(data => {
    if(data.status == 200) {
    alert("Reminder added Successfully.");
    Actions.home();
    }
  })  
  .catch((error) => {
        console.error(error);
    });
}
     

 onChange = (event, selectedTime) => {
  let { time } = this.state;
  const currentTime = selectedTime || time;
  this.setState({time: currentTime});

};

  render() {
    let { time, show, repeat, label, description, id } = this.state;
    let list = [
      { label: "Don't repeat", value: "dontrepeat" },
      { label: "Every day", value: "day" },
      { label: "Every week", value: "week" },
      { label: "Every month", value: "month" },
      { label: "Every year", value: "year" },
    ];

    return (
    <KeyboardAwareScrollView>
      <View style={styles.MainContainer}>
      <View style={styles.time}>
        <Text style={styles.timeLabel}>Time: </Text>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={'time'}
          is24Hour={true}
          display="inline"
          onChange={this.onChange}
          style={styles.timePicker}
        />
        )}
        </View>
        
       <View style={styles.time}>
          <Text style={styles.timeLabel}>Label: </Text>
          <TextInput
            placeholder="Label"
            onChangeText={label => this.setState({label})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            value={label}
          />
        </View>
        <View style={styles.time}>
          <Text style={styles.timeLabel}>Repeat: </Text>
          <View style={styles.TextInputStyleClass}>
          <RNPickerSelect
                onValueChange={(repeat) =>  this.setState({repeat})}
                items={list}
                value={repeat}
            />
          </View>
        </View>
        <View style={styles.time}>
          <Text style={styles.timeLabel}>Notes: </Text>
          <TextInput
              placeholder="Notes"
              multiline={true}
              onChangeText={description => this.setState({description})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              value={description}
            />
        </View>
        <Button title={id ? "Edit" : "Add"} onPress={() => {id ? this.editReminder(id) :this.addReminder()}} color="#2196F3" />
       
    </View>
    </KeyboardAwareScrollView>
    );
  };
};
