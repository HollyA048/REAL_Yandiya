import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function TopHeader(){
    return(
    <View style={styles.header}>
        <Text style={styles.headerText}>Commissioning Checklist</Text>
    </View>
    );
}

export default TopHeader;

const styles={
    header: {
        width: '100%',
        height: '20%',
        backgroundColor: '#e42c22',
        justifyContent: 'center',
        borderBottomColor: 'black',
        marginBottom: 24,
        borderBottomWidth: 1.5,
        borderTopColor: 'black',
        borderTopWidth: 1.5,
    
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    
        elevation: 7,
      },
      headerText: {
        fontSize: 40,
        textAlign: 'center',
      },
}