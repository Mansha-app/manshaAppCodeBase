import { StyleSheet, Dimensions, Platform } from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
      MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10,
        // paddingVertical: 20,
        marginTop: 100, 
      },

      TextInputStyleClass: {
        textAlign: 'left',
        marginBottom: 7,
        padding: 10,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
        width: '70%',
      },
      time: {
        flexDirection: 'row',
        marginBottom: 7,
        width: '100%'
      },
      timeLabel: {
        width: '30%',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        fontSize: 20,
        marginBottom: 7,
        // textAlign: 'center'
      },
      timePicker: {
        width: '50%', 
        flex: 1,
        alignItems:'flex-end',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
      },
      title:{
        fontSize: 22, 
        color: "#009688", 
        textAlign: 'center', 
        marginBottom: 15
      }
})