import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, Platform} from 'react-native';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';
import base64 from 'react-native-base64';

export default class otpModule extends Component {
  
  constructor(props) {
    super()
    this.state = {
      mobile: '',
      otp: '',
      user: '',
    }
  }
 
getOtp = () => {
  let { mobile } = this.state;
  this.setState({otp : 1234});
  Actions.verifyOtp();
//   const auth = base64.encode(`user:emUdZewyaHb6`);
//   console.log("asbdhjknamlsd", mobile);
//   fetch('http://54.172.198.142/wp-json/wl/v1/', {
//     method: 'POST', 
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//        Authorization: `Basic ${auth}`,
//     },
//     body: JSON.stringify({
//       mobile: mobile,
//     })
//   })
//   .then(data => {
//     if(data.status == 200) {
//      Actions.verifyOtp();
//     }
//   })  
//   .catch((error) => {
//         console.error(error);
//     });
};

  render() {
    let { mobile } = this.state;
    return (
    <KeyboardAwareScrollView>
      <View style={styles.MainContainer}>
        <View style={styles.time}>
          <Text style={styles.timeLabel}>Mobile number: </Text>
          <TextInput
            placeholder="Mobile"
            keyboardType={Platform.OS = 'ios' ? 'number-pad' : 'numeric'}
            onChangeText={mobile => this.setState({mobile})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            value={mobile}
          />
        </View>
        <Button title={"Get OTP"} onPress={() => this.getOtp()} color="#2196F3" />
    </View>
    </KeyboardAwareScrollView>
    );
  };
};
