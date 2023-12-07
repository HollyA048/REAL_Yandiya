import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f7',
    height: '100%',
  },
  switchButton:{
    height: "20%",
    width: "50%",
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  formContainer: {
    height: 'auto',
    paddingBottom: '10%',
    marginLeft: '10%',
    width: '80%',
    marginTop: '15%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowRadius: 9.65,
    shadowOpacity: 0.2,
  },
  formText: {
    fontSize: 30,
    alignSelf: 'center',
    top: 0,
    marginTop: '5%',
  },
  inputText: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    marginVertical: 16,
  },
  authenticateStatus: {
    color: 'red',
  },
  signUpButton: {
    height: '30%',
    bottom: '0%',
    width: '100%',
    elevation: 3,
    justifyContent: 'center',
    position: 'absolute',
    shadowColor: 'black',
    shadowRadius: 9.65,
    shadowOpacity: 0.1,
  },
  signUpButtonText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default styles;