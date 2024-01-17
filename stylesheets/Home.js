import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    userName: {
        marginTop: height * 0.05, // 5% of the screen height
        fontSize: width * 0.06, // 6% of the screen width
        fontWeight: 'bold',
      },
commissionsContainer: {
    flexGrow: 1,
    alignItems: 'center',
    width: '103%',
},
ScrollContainer: {
    flex: 1,
    width: '90%'
},
ScrollItem: {
    width: '97%',
    alignItems: 'center',
},
whitespace: {
    position: 'absolute',
    top: height * 0.105, // 2% of the screen height from the top
    right: width * 0.02, // 2% of the screen width from the right
    width: width * 0.15, // 15% of the screen width
    height: height * 0.15, // 15% of the screen height
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
    height: 1,
    backgroundColor: '#d9d9d9',
    width: '70%',
    marginTop: 1,
    alignSelf: 'center',
},
commissionItem: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: 'gray',
    shadowRadius: 1,
    shadowOffset: 3,
    shadowOpacity: 0.2,
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
    width: '100%',
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