import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
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
      justifyContent: 'center'
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
      width: '98%',
      backgroundColor: 'black',
      borderRadius :20,
      marginLeft: '1%',
    },
    clientInfoBox: {
      width: '45%',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 20,
      alignItems: 'center',
    },
    flexContainer: {
      flexDirection: 'column',
      fontSize: 30,
      textAlign: 'center',
      width: '45%', // Adjust the width
      marginLeft: '2.5%', // Use '2.5%' as a string
      height: '100%',
    },
    flexItemLeft: {
      backgroundColor: '#f8f7f7',
      padding: 10,
      height: 'auto',
      borderRadius: 20,
      borderColor: 'black',
      borderWidth: 2,
    },
    flexItemRight: {
      backgroundColor: '#f8f7f7',
      padding: 10,
      height: 'auto', 
      borderRadius: 20,
      borderColor: 'black',
      borderWidth: 2,
    },
    flexText:{
      color: 'blck',
      fontSize: 16,
      padding: 5,
    },
    contain: {
      flexDirection: 'row', // Align items horizontally
      justifyContent: 'center',
      maxHeight: '35%',
      marginTop: '4%',
    },
    clientText:{
      padding: 2,
      fontSize: 16,
    },
    continue: {
      height: 'auto',
      width: 'auto',
      backgroundColor: 'green',
      alignSelf :'center',
      borderRadius: 20,
      marginTop: '10%',
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
})
  