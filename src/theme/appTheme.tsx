import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      paddingHorizontal: 20
    },
    calculatorContainer: {
      flex:1,
      paddingHorizontal: 20,
      justifyContent: 'flex-end'
    },
    calculatorRow:{
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textSmallResult: {
      color: 'rgba(255,255,255, 0.5)',
      fontSize: 30,
      textAlign: 'right',
    },
    textResult: {
      color: 'white',
      fontSize: 60,
      textAlign: 'right',
    },
    button: {
      backgroundColor:'#2D2D2D',
      width: 80,
      height: 80,
      justifyContent: 'center',
      borderRadius: 100,
      margin: 8,
    },
    buttonText: {
      textAlign: 'center',
      justifyContent: 'center',
      color:'white',
      fontSize: 30,
      fontWeight: '300'
    }
});