import {useEffect, useState} from 'react';
import { Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import { styles } from '../stylesheets/Commission'

import TopHeader from '../components/Header';
import Checkbox from '../components/Checkbox';
import axios from "axios";

export function CommissionScreen({ route, navigation: { navigate }}) {
    let commission_id = route.params?.commission_id;
    const navigation = useNavigation();
    const [checklistData, setChecklistData] = useState([]);
    function goalInputHandler() {
        throw new Error("Not Implemented");
    }

    function addGoalHandler() {
        throw new Error("Not Implemented");
    }

    const checklistNetworkRequest = () => {
        // runs network request to GET the checklist data
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
    const getChecklist = () => {
        // runs checklistNetworkRequest and sets that data
        checklistNetworkRequest()
            .then(function (response) {
                if (response.data !== null) {
                    setChecklistData(response.data.checklists);
                }
            })
            .catch(error => {
                console.error('Error fetching checklists:', error);
            })
    };

    const submitChecklist = () => {
        // submits checklist data to the server
        submitNetworkRequest()
          .then(function(response) {
            console.log(response); // debug
            navigation.navigate("Home");
          })
          .catch(error => {
            console.error("Error Submitting Checklists:", error);
            navigation.navigate("Home");
          })
    }

    const submitNetworkRequest = () => {
        // runs network request to SUBMIT checklist data
        const formData = new FormData();
        formData.append("com_id", commission_id.toString());
        formData.append("checklist_data", JSON.stringify(checklistData));

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
        getChecklist();
    }, [route]);

    const toggleCheckBox = (index, checked) => {
        console.log(checked);
        setChecklistData(prevChecklistData => {
            let updatedChecklist = [...prevChecklistData];
            updatedChecklist[index].checked = checked ? 0 : 1;
            return updatedChecklist;
        });
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
                    <Button title={"Refresh"} onPress={() => getChecklist() }/>
                    <Button
                        title="Add"
                        onPress={addGoalHandler}
                    />
                </View>
                {checklistData === undefined ? (
                    <View>
                        <Text>No Checklists Found!</Text>
                    </View>
                ) : (
                    checklistData.map((checkbox, index) => (
                        <View style={styles.boxContainer} key={index}>
                            <View style={styles.checkboxContainer}>
                                <TouchableOpacity onPress={() => toggleCheckBox(index, checkbox.checked !== 0)}>
                                    <Checkbox _checked={checkbox.checked !== 0} text={checkbox.title}/>
                                </TouchableOpacity>
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