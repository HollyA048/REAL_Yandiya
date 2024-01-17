import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
        <View style={{ height: '100%', display: 'flex' }}>
            <Text style={styles.title2}>Create a Commission</Text>
            <View style={styles.entry}>
                <Text style={styles.title1}>Title</Text>
                <View style={styles.separator} />
                <TextInput
                    placeholder="Enter Title"
                    value={title}
                    onChangeText={text => setTitle(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.entry}>
                <Text style={styles.title1}>Description</Text>
                <View style={styles.separator} />
                <TextInput
                    placeholder="Enter Description"
                    value={description}
                    onChangeText={text => setDescription(text)}
                    style={styles.input}
                />
            </View>
            <Text style={styles.status}>Status: {submitStatus}</Text>
            <View style={styles.bottomButtons}>
                <TouchableOpacity onPress={SubmitData}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Home')}><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    title1: {
        marginTop: '20%',
        fontSize: 25,
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 30,
        marginTop: '10%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    entry: {
        padding: '10%',
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
    status: {
        textAlign: 'center',
    },
    input: {
        fontSize: 20,
    },
    bottomButtons: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        top: '40%',
    },
    buttonText: {
        color: 'blue',
        fontSize: 25,
        padding: 20,
    }
};