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
import { styles } from '../stylesheets/commission_css'

import TopHeader from '../components/Header';
import Checkbox from '../components/Checkbox';
import axios from "axios";

export function CommissionScreen({ route, navigation: { navigate }}) {
  let commission_id = route.params?.commission_id;
  const navigation = useNavigation();
  const [checklistData, setChecklistData] = useState([]);
  const [checkboxes, setCheckBoxes] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  function goalInputHandler(enteredText) {
    throw new Error("Not Implemented");
  }

  function addGoalHandler() {
    throw new Error("Not Implemented");
  }

  const getChecklist = () => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://188.39.66.240:9080/get_checklist.php',
        responseType: 'json',
        params: {
          "com_id" : commission_id.toString()
        },
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(function (response) {
          resolve(response);
        })

        .catch(function (error) {
          console.log(error);
          reject(error);
        })
    })
  };
  const fetchChecklist = () => {
    getChecklist()
      .then(function (response) {
        if (response.data !== null) {
          createCheckBoxes(response.data.checklists);
        }
      })
      .catch(error => {
        console.error('Error fetching checklists:', error);
      })
  };

  const submitChecklist = () => {
    let checkboxValues = [];
    debugger;
    checkboxes.map((checkbox) => (
      checkboxValues.push([...checkboxValues, checkbox.getChecked()])
    ))




    onSubmitChecklist()
      .then(function(response) {
        console.log(response); // debug
        navigation.navigate("Home");
      })
      .catch(error => {
        console.error("Error Submitting Checklists:", error);
        navigation.navigate("Home");
      })
  }

  const onSubmitChecklist = (checklists) => {
    const formData = new FormData();
    formData.append("com_id", commission_id.toString());
    formData.append("checklist_data", JSON.stringify(checklists));

    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'http://188.39.66.240:9080/update_checklist.php',
        responseType: 'json',
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
    })
  }

  useEffect(() => {
    fetchChecklist();
  }, [route]);

  const toggleCheckBox = (index, checked) => {
    const updatedChecklist = [...checklistData];
    updatedChecklist[index].checked = checked ? "1" : "0";
    setChecklistData(updatedChecklist);
    console.log("checklists: " + JSON.stringify(checklistData));
  };

  const createCheckBoxes = (checklistData) => {
    let newCheckBoxes = checklistData.map((task) => (
       <Checkbox
       _checked={task.checked !== 0}
       text={task.title}
       />
    ));
    setCheckBoxes(newCheckBoxes);
  }

  return (

    <View style={styles.appContainer}>
      <TopHeader />
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text>{commission_id}</Text>
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
        {checklistData === undefined ? (
            <View>
              <Text>No Checklists Found!</Text>
            </View>
        ) : (
        checkboxes.map((checkbox, index) => (
          <View style={styles.boxContainer} key={index}>
            <View style={styles.checkboxContainer}>
              {checkbox}
            </View>
            <View style={styles.checkBoxDescContainer}>
            </View>
          </View>
      )))}
      </ScrollView>
      <Button title={"Save"} onPress={() => submitChecklist(checklistData)}/>
    </View>
  );
}