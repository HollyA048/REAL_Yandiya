import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f7f7',
      height: '100%',
      width: '100%',
    },
    header: {
      backgroundColor:'#e42c22',
      width: '100%',
      height: '12.5%',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      top: '0%',
    },
    headerText:{
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      padding: 1,
    },
    CompanyBox:{
      height: '10%',
      width: '100%',
      justifyContent: 'center',
    },
    companyText:{
      fontSize :28,
      fontWeight: 'bold',
      textDecorationLine :'underline',
      color: 'black',
      textAlign :'center',
    },
    divider:{
      height: '0.2%',
      width: '96%',
      backgroundColor: 'black',
      borderRadius :20,
      alignSelf: 'center',
      top: '5%',
      margin: '5%',
    },
    jobInfoBox: {
      height: '6%',
      width: '80%',
      borderWidth: 2.5,
      alignSelf: 'center',
      top: '5%',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      // Updated boxShadow properties for a clearly visible black shadow
      // Adjusted for clear and black shadow
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', 
      shadowOpacity: 0.2,
      elevation: 15,
      backgroundColor: 'white'
    },
    JobInfoText: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      // No shadow properties for the text
    },
    continue: {
      height: 'auto',
      width: 'auto',
      backgroundColor: 'green',
      alignSelf :'center',
      borderRadius: 20,
      marginTop: '15%',
      // Adjusted for clear and black shadow
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', 
      shadowOpacity: 0.2,
      elevation: 15,
    },
    continue_button: {
      fontSize: 24,
      color: 'white',
      padding: 10,
    },
    logo: {
      height: '100%',
      width: '100%',
      zIndex: -1,
      position: 'absolute',
      opacity: 0.3,
      marginTop: '65%',
      marginLeft: '3%',
    },
  
  });
  