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
import { styles } from '../stylesheets/Commission'

import TopHeader from '../components/Header';
import Check from '../components/ComCheckBox';
import axios from "axios";

export function CommissionScreen({ route, navigation: { navigate }}) {
  let commission_id = route.params?.commission_id;
  const navigation = useNavigation();
  let [checklists, setChecklists] = useState([]);
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
          setChecklists(response.data.checklists);
        }
      })
      .catch(error => {
        console.error('Error fetching checklists:', error);
      })
  };

  const submitChecklist = (checklists) => {
    onSubmitChecklist(checklists)
      .then(function(response) {
        console.log(response); // debug
        navigation.navigate("Home");
      })
      .catch(error => {
        console.error("Error Submitting Checklists:", error);
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
        {checklists === undefined ? (
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
      <Button title={"Save"} onPress={() => submitChecklist(checklists)}/>
    </View>
  );
}