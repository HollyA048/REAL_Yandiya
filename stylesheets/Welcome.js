import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    loginContainer: {
        width: '25%',
        height: '5%',
        border: 'black',
        marginTop: '1%',
        marginLeft: '37%',
        borderRadius: 20,
    },

    singupContainer: {
        width: '25%',
        height: '5%',
        border: 'black',
        marginTop: '-15%',
        marginLeft: '37%',
        borderRadius: 20,
    },

    WelcomeText: {
        fontSize: 26,
        position: 'absolute',
        zIndex: 1,
        top: '20%',
        alignSelf: 'center',
        fontWeight: 'bold',
    },

    backgroundImg: {
        width: '75%',
        height: '75%',
        marginTop: '0%',
        marginLeft: '23%',
        shadowColor: 'black',
        shadowRadius: 14.65,
        shadowOpacity: 5,
    },

    wel_imgConatiner: {
        width: '100%',
        height: '10%',
        marginLeft: '0%',
        backgroundColor: '#e42c22',
        borderRadius: 20,
        shadowColor: 'red',
        shadowRadius: 14.65,
        shadowOpacity: 1,
    },
})