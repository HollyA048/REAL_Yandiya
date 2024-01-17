import React, { Component } from 'react';
import { Text, View, StyleSheet, PixelRatio } from 'react-native';

// makes the text responsive
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

class Checkbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.check_icon}>{this.props._checked ? '✅' : '❌'}</Text>
                <Text style={styles.text}>
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
        fontSize: getFontSize(40),
    },
    text: {
        fontSize: getFontSize(20),
        paddingLeft: 9,
        paddingRight: 5
    }
});

export default Checkbox;
