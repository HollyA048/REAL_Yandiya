import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView, TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import TopHeader from '../components/Header';
import Check from '../components/ComCheckBox';

export function commissionScreen({ navigation: { navigate } }) {
  const route = useRoute();
  const commission_id = route.params?.commission_id;
  const [checklists, setChecklists] = useState([]);
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

  const getChecklist = async () => {
    try {
      console.log(commission_id);
      const response = await fetch('http://188.39.66.240:9080/get_checklist.php?com_id=' + commission_id.toString());
      if (!response.ok) {
        throw new Error('Session Request failed with status code ' + response.status);
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const fetchChecklist = async () => {
    try {
      const result = await getChecklist();
      setChecklists(result);
    } catch (error) {
      console.error("Error fetching checklist!");
    }
  };
  useEffect(() => {
    fetchChecklist();
  }, []);

  return (

    <View style={styles.appContainer}>
      <TopHeader />
      <Button title={"Refresh"} onPress={() => fetchChecklist }/>
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
        {checklists.length === 0 ? (
            <View>
              <Text>No Checklists Found!</Text>
            </View>
        ) : (
        checklists.map((task) => (
              <View style={styles.boxContainer} key={task.response_id}>
                <View style={styles.checkboxContainer}>
                  <Check/>
                </View>
                <View style={styles.checkBoxDescContainer}>
                  <Text style={{bottom: '10%'}}><Text style={{fontWeight: "bold"}}>{task.response_id}</Text>:{task.title}</Text>
                </View>
              </View>
      )))}
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
