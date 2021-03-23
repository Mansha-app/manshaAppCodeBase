import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    MainContainer :{
        justifyContent: 'flex-start',
        flex:1,
        marginTop: 50,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        alignContent: 'center',        
    }, 

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
    },
    addButton: {
        fontSize: 30, 
        color: "#009688", 
        paddingVertical: 10,
    },
    title:{
        fontSize: 20, 
        color: "#009688", 
        textAlign: 'center',
        alignSelf: 'center',
    }
})