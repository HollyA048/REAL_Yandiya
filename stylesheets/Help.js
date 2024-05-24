import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    initalScreenImage: {
        width: 300,
        height: 500,
        flex: 1,
        position: 'absolute',
        right: '11%',
        top: '-5%',
    },
    topBackButton: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
        right: 3,
    },
    backText: {
        color: 'black',
        fontSize: 22,
        position: 'absolute',
        left: 12,
        top: 10,
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 0,
        backgroundColor: 'white',
        width: 75,
        height: 50,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
    },
    contactContainer: {
        height: 300,
        width: 275,
        bottom: '6%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        elevation: 3,
    },
})