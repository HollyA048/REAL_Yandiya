import React, { useState } from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function addCommissionScreen({navigation: { navigate } }) {
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
        <View style={{top: "25%"}}>
            <Button title={'Back'} onPress={() => navigate('Home')}/>
            <Text style={styles.title2}>Yandiya Technologies LTD Commission Creating Tool.</Text>
            <View style={styles.entry}>
                <Text style={styles.title1}>Title:</Text>
                <View style={styles.separator} />
                <TextInput
                    placeholder="Enter Title"
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
                <Text style={styles.title1}>Description:</Text>
                <View style={styles.separator} />
                <TextInput
                    placeholder="Enter Description"
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
                <Text>Status: {submitStatus}</Text>
                <Button title="Submit" onPress={SubmitData}/>
            </View>
        </View>
    )
}

const styles = {
    title1: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    entry: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        height: 3,
        backgroundColor: '#e42c22',
        width: 200,
        marginTop: -2,
        alignSelf: 'center',
    },
};