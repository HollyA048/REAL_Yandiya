import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

import TopHeader from '../components/Header';
import Check from '../components/ComCheckBox';

export function commissionScreen({ navigation: { navigate } }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    setIsButtonDisabled(enteredText === '');
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  const dummy_data = require('../checklists/std_commissioning.json');
  return (

    <View style={styles.appContainer}>
      <TopHeader />
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Custom requirement here:"
            onChangeText={goalInputHandler}
          />
          <Button 
            title="Add" 
            onPress={addGoalHandler}
            disabled={isButtonDisabled} />
        </View>
          {dummy_data.map((commission) => {
            return (
                <View style={styles.boxContainer}>
                  <View style={styles.checkboxContainer}>
                    <Check />
                  </View>
                  <View style={styles.checkBoxDescContainer}>
                    <Text style={{ bottom: '10%' }}><Text style={{fontWeight: "bold"}}>{commission.id}</Text>:{commission.title}</Text>
                  </View>
                </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    left: '30%',
    marginRight: 8,
    padding: 8,
  },
  customTitle: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
  },
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  checkBoxDescContainer: {
    right: '30%',
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    left: '0.1%',
    marginBottom: 40,
  },
  proceedButton:{
    width: '25%',
    alignSelf: 'center',
    marginTop: '10%',
  }
});
