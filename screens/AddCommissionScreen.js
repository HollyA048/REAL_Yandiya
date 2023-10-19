import React, {useState} from 'react';

import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        fetch(`http://188.39.66.240:9080/new_commission.php`, {
            method: 'POST',
            body: formData,
        })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Request failed with status code ' + response.status);
              }
              else {
                  setStatus("Success!");
                  navigation.navigate("Home");
              }
          })
          .catch(error => {
              setStatus(error.message);
          });
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

const styles = StyleSheet.create({
    commissionButton: {
        display: 'flex',
        alignItems: 'center',
        top: '15%',
        textAlign: 'center',
    },
    topBorder: {
        backgroundColor: 'red',
        width: '100%',
        height: '10%',
        position: 'absolute',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    content: {
        top: 0,
        position: 'absolute',
        height: '90%',
        width: '100%',
        backgroundColor: '#f7f7f7',
    },
    bottomBorder: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'red',
        width: '100%',
        height: '10%',
        flexDirection: 'row',
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addCommButton: {
        bottom: 25,
        height: 70,
        width: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#dd0000',
    },
    commImage: {
        height: '100%',
        width: '100%',
    },
    topBorderText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    commAdd: {
        height: '40%',
        width: '75%',
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        top: '30%',
        borderColor: 'black',
        borderRadius: 30,
    },
    page: {
        height: '100%',
        width: '100%',
    },
    inputMargin: {
        marginTop: 10,
    },
    inputs: {
        width: '90%',
        marginLeft: '5%',
        backgroundColor: '#eeeeee',
        height: '25%',
        borderRadius: 5,
        padding: 5,
    },
    submitButton: {
        height: '10%',
        width: '35%',
        backgroundColor: 'red',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderRadius: 5,
    },
});
