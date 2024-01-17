import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Checkbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.check_icon}>{this.props._checked ? '✅' : '❌'}</Text>
                <Text style={{paddingLeft: 9}}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'lightgrey',
    },
    check_icon: {
        fontSize: 40
    }
});

export default Checkbox;
