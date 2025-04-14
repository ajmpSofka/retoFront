import { Dimensions, StyleSheet } from 'react-native';

export const colors = {
    //background: '#121212',
    button: '#2D3EFA',
    //primaryText: '#FFFFFF',
    secundaryText: '#B0B0B0',
    Bordes: '#3A3A3A',
  };

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: colors.background,
      padding: 16,
    },
    title: {
      fontSize: 40,
      //color: colors.primaryText,
    },
    LoginContainer: {
        //height: Dimensions.get('screen').height * 0.3,
        borderWidth: 2,
        borderColor: '#202c42',
        borderRadius: 16,
        //backgroundColor: '#1e1e1e',
        padding: 16,
    },
    inputText: {
      paddingVertical: 20,
      backgroundColor: '#cccccc40',
      borderRadius: 30,
      marginVertical: 10,
    },
    addButton: {
      //width: Dimensions.get('screen').width * 0.8,
      padding: 20,
      backgroundColor: '#5897fb',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white',
    },
  });

