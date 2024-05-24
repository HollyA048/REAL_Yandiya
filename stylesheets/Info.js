import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: 190,
        height: 200,
        flex: 1,
        position: 'absolute',
        top: -15,
        right: 0,
    },
    clientContainer: {
        backgroundColor: 'white',
        height: '68%',
        width: '70%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 20,
        marginLeft: '15%',
        marginTop: '10%',
        borderWidth: 2,
        borderColor: 'black'
    },
    imgView: {
        backgroundColor: '#e42c22',
        height: '18%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingHorizontal: 20,
    },
})