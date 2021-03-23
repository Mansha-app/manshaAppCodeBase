import { StyleSheet, Dimensions, Platform } from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'flex-start',
    marginTop: 50, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  addButton: {
    alignSelf: 'center',
    fontSize: 22, 
    color: "#009688", 
  },
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
  title:{
    fontSize: 22, 
    color: "#009688", 
    alignSelf: 'center',
  },
  reminder: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 10,
  },
  reminderTime: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  reminderActions: {
    flexDirection: 'row',
  },
  label: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#E2E2E2'
  },
  reminderTimeText: {
    fontSize: 30,
    paddingTop: 5,
  },
  description: {
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  repeatText: {
    fontSize: 15,
    paddingVertical: 5,
  },
  startIcon: {
    color: "#009688",
    fontSize: 22, 
    // padding: 5, 
    alignContent: 'flex-end',
    alignSelf: 'flex-end'
  },
})