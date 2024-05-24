import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#e42c22',
        height: '28%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingHorizontal: 20,
    },
    white_banner: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 10,
        height: 60,
        justifyContent: 'center',
    },
    middle_box: {
        backgroundColor: 'white',
        height: 300,
        width: 250,
        top: '7%',
        alignSelf: 'center',
        elevation: 3,
        borderRadius: 20,
    },
    logout_title: {
        fontWeight: 'bold',
              top: '8%',
              fontSize: 18,
              textAlign: 'center',
              alignSelf: 'center',
    },
    logOutImage: {
        width: 190,
        height: 200,
        position: 'absolute',
        right: '25%',
    },
    noButton: {
        height: 40,
        elevation: 2,
        backgroundColor: '#e42c22',
        marginTop: '10%',
        borderRadius: 15,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    yesButton: {
        height: 40,
        elevation: 2,
        backgroundColor: '#32aa46',
        marginTop: '30%',
        borderRadius: 15,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'center',
    },
})
  