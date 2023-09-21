import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();

const getCommissions = async () => {
    try {
        const response = await fetch('http://188.39.66.240:9080/get_commissions.php');
        if (response.status === 204) {
            console.log('No commissions found');
            return []; // Return an empty array if no commissions found
        }
        if (!response.ok) {
            throw new Error('Request failed with status code ' + response.status);
        }
        const result = await response.json();
        console.log('Commissions result:', result);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getSession = async () => {
    try {
        const response = await fetch('http://188.39.66.240:9080/get_session.php');
        if (!response.ok) {
            throw new Error('Session Request failed with status code ' + response.status);
        }
        const result = await response.json();
        return result[0]; // Modify this line to return the first element of the array
    } catch (error) {
        console.error(error);
        return null;
    }
};

export function homeScreen({ navigation: { navigate } }) {
    const [commissions, setCommissions] = useState([]);
    const [sessionData, setSessionData] = useState([]);

    const fetchSession = async () => {
        const result = await getSession();
        console.log("Result session ", result);
        if (result !== null) {
            setSessionData(result);
        }
    };


    const fetchCommissions = async () => {
        const result = await getCommissions();
        if (result !== null) {
            setCommissions(result);
        }
    };

    useEffect(() => {
        fetchCommissions();
    }, []);

    useEffect(() => {
        fetchSession();
    }, []);

    return (
        <View style={{ flex: 1 } }>
            <View style={{ backgroundColor: '#f8f7f7', flex: 1 }}>
                <View style={{ alignItems: 'center', height: 200, marginTop: '5%' }}>
                    <Text style={styles.userName}>Hello {sessionData.user_name || "Undefined Name"}</Text>

                    <Text style={{ fontSize: 18 }}>New Commission</Text>
                    <View style={styles.separator} />
                    <TouchableOpacity style={styles.whitespace} onPress={() => navigate('addCommission')}>
                        <Text>+</Text>
                        <Text>Add New Commission</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 18 }}>Current Commissions</Text>
                    <View style={styles.separator} />
                    <Button title={"Refresh"} onPress={() => fetchCommissions() }/>
                    <ScrollView contentContainerStyle={styles.commissionsContainer}>
                        {commissions.length === 0 ? (
                            <TouchableOpacity style={styles.whitespace}>
                                <Text>No Commissions Found</Text>
                            </TouchableOpacity>
                        ) : (
                        commissions.map((commission, index) => (
                            <TouchableOpacity key={index} style={styles.commissionItem} onPress={() =>
                                navigate('inspectionScreen', {
                                    commission_id: commission.id // passing the commission id into the inspection screen so that the relevant tasks can be shown
                                })}>
                                <Text style={styles.commissionTitle}>{commission.title}</Text>
                                <View style={styles.miniSeparator} />
                                <Text style={styles.commissionDescription}>{commission.description}</Text>
                            </TouchableOpacity>
                            ))
                        )}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = {
    userName: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    commissionsContainer: {
        flexGrow: 1,
        alignItems: 'center',
    },
    whitespace: {
        width: '60%',
        height: 100,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
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
    miniSeparator: {
        height: 2,
        backgroundColor: '#d9d9d9',
        width: 50,
        marginTop: 1,
        alignSelf: 'center',
    },
    commissionItem: {
        width: '80%',
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    commissionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    commissionDescription: {
        fontSize: 15,
        textAlign: 'center',
    },
    footer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: '#e42c22',
        height: '5%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
    },
};
