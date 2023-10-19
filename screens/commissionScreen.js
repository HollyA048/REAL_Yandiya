import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView, Pressable,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import TopHeader from '../components/Header';
import Check from '../components/ComCheckBox';
import {Ionicons} from "@expo/vector-icons";

export function commissionScreen({ navigation: { navigate } }) {
  const navigation = useNavigation();
  const route = useRoute();
  const commission_id = route.params?.commission_id;
  const [checklists, setChecklists] = useState([]);
  const [checkBoxes, setCheckBoxes] = useState([]);
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

  const saveChecklist = async (checklists) => {
    const formData = new FormData();
    formData.append("com_id", commission_id.toString());
    formData.append("checklist_data", JSON.stringify(checklists));
    fetch(`http://188.39.66.240:9080/update_checklist.php`, {
      method: 'POST',
      body: formData,
    })
      .then(async response => {
        if (!response.ok) {
          throw new Error('Request failed with status code ' + response.status);
        } else {
          const result = await response.text();
          console.log(result);
          navigation.navigate("Home");
        }
      })
  }

  useEffect(() => {
    fetchChecklist();
  }, []);

  const toggleCheckBox = (index) => {
    const updatedChecklist = [...checklists];
    updatedChecklist[index].checked = updatedChecklist[index].checked === "1" ? "0" : "1";
    setChecklists(updatedChecklist);
    console.log("checklists: " + JSON.stringify(checklists));
  };

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
          <Button title={"Refresh"} onPress={() => fetchChecklist() }/>
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
        checklists.map((task, index) => (
              <View style={styles.boxContainer} key={index}>
                <View style={styles.checkboxContainer}>
                  <Check _checked={task.checked !== "0"} _onPress={() => toggleCheckBox(index)}/>
                </View>
                <View style={styles.checkBoxDescContainer}>
                  <Text style={{bottom: '10%'}}><Text style={{fontWeight: "bold"}}>{index}</Text>:{task.title} {"+ "} {task.checked}</Text>
                </View>
              </View>
      )))}
      </ScrollView>
      <Button title={"Save"} onPress={() => saveChecklist(checklists)}/>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    left: '0.1%',
    marginBottom: 40,
  },
  proceedButton:{
    width: '25%',
    alignSelf: 'center',
    marginTop: '10%',
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  }
});
