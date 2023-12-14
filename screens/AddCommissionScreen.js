import React, {useState} from 'react';

import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { styles } from '../stylesheets/addCommission_css';

export function AddCommissionScreen({navigation: { navigate } }) {
    const navigation = useNavigation();
    const [submitStatus, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const SubmitData = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);

        console.log("Sent: ", formData)
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: 'http://188.39.66.240:9080/new_commission.php',
                responseType: 'json',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            })
              .then(function (response) {
                  resolve(response);
                  navigation.navigate("Home");
              })
              .catch(function (error) {
                  console.log(error);
                  reject(error);
              })
        })
    };

    return (
      <View style={styles.page}>

          <View style={styles.topBorder}>
              <Text style={styles.topBorderText}>Add Commissions</Text>
          </View>

          <View style={styles.commAdd}>
              <Text style={{ textAlign: 'center' }}>Commission Title:</Text>
              <TextInput style={styles.inputs} value={title} onChangeText={text => setTitle(text)} multiline={true}></TextInput>
              <Text style={(styles.inputMargin, { textAlign: 'center' })}>
                  Description:
              </Text>
              <TextInput style={styles.inputs} value={description} onChangeText={text => setDescription(text)} multiline={true}></TextInput>
              <TouchableOpacity style={styles.submitButton} onPress={SubmitData}><Text>Submit</Text></TouchableOpacity>
          </View>
      </View>
    );
}

