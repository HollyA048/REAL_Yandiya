import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';

import TopHeader from '../components/Header';
import Check from '../components/ComCheckBox';
import CustomCom from '../components/ExpoSucks';

export function preCom({ navigation: { navigate } }) {
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
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check />
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text>All double pole switches connected to relay box</Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check />
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text style={{ bottom: '10%' }}>
              All relay boxes numbered or labelled corresponding to room number
            </Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check />
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text style={{ bottom: '10%' }}>
              All electrical power to each spur live in the off position
            </Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check />
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text style={{ bottom: '10%' }}>
              All panels fitted and located in their correct positions
            </Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check />
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text style={{ bottom: '10%' }}>
              All thermostats mounted in a central position within each area
            </Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check />
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text>Keep batteries uninstalled</Text>
          </View>
        </View>
        
        <View style={styles.customTitle}>
          <Text
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
            Custom Requirements
          </Text>
        </View>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <CustomCom text={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}></FlatList>
          <View style={styles.proceedButton}>
            <Button title="Proceed"/>
          </View>
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
    borderBotomColor: '#cccccc',
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
