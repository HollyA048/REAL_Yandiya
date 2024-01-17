import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        left: '30%',
        marginRight: 8,
        padding: 8,
      },
      customTitle: {
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
      },
      checkboxContainer: {
        left: '5%',
        bottom: '2%',
      },
      boxContainer: {
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
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        left: '0.1%',
        marginBottom: 40,
      },
      proceedButton:{
        width: '25%',
        alignSelf: 'center',
        marginTop: '10%',
      },
      checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'coral',
        backgroundColor: 'transparent',
      },
      checkboxChecked: {
        backgroundColor: 'coral',
      }
})
  