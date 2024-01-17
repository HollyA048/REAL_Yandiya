import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Check from './OLDComCheckBox';

function CustomCom(props) {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.checkboxContainer}>
        <Check />
      </View>
      <View style={styles.checkBoxDescContainer}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </View>
  );
}

export default CustomCom;

const styles = StyleSheet.create({
  checkboxContainer: {
    left: '5%',
    bottom: '2%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    borderBottomWidth: 1,
    borderBotomColor: '#cccccc',
  },
  checkBoxDescContainer: {
    right: '30%',
    width: '80%',
  },
});