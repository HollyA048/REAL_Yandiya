import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  checkboxContainer: {
    left: '5%',
    bottom: '2%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  boxContainer: {
    top: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  checkBoxDescContainer: {
    right: '30%',
    width: '80%',
  },
  continueButton: {
    width: '25%',
    height: 50,
    alignSelf: 'center',
    marginTop: '10%',
    bottom: '5%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#e42c22',
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    top: '25%',
  },
})
  