import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  userName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
},
commissionsContainer: {
    flexGrow: 1,
    alignItems: 'center',
},
whitespace: {
    width: '60%',
    height: 100,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
separator: {
    height: 3,
    backgroundColor: '#e42c22',
    width: 200,
    marginTop: -2,
    alignSelf: 'center',
},
miniSeparator: {
    height: 2,
    backgroundColor: '#d9d9d9',
    width: 50,
    marginTop: 1,
    alignSelf: 'center',
},
commissionItem: {
    width: '80%',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
},
commissionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
},
commissionDescription: {
    fontSize: 15,
    textAlign: 'center',
},
footer: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#e42c22',
    height: '5%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
},
})
  