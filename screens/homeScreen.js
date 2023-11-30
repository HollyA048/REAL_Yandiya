import React from 'react';
import axios from 'axios';
import {Text, View, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import TopHeader from '../components/Header';

const Stack = createStackNavigator();

const getCommissions = () => {
    return new Promise((resolve, reject) => {
    axios({
        method: 'get',
        url: 'http://188.39.66.240:9080/get_commissions.php',
        responseType: 'json'
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


const getSession = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: 'http://188.39.66.240:9080/get_session.php',
            responseType: 'json'
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

export function HomeScreen({ navigation: { navigate } }) {
    const [commissions, setCommissions] = useState([]);
    const [sessionData, setSessionData] = useState([]);

    const fetchSession = () => {
        getSession()
        .then(function (response) {
            console.log(response);
            console.log(response.data);
            if (response.data !== null) {
                setSessionData(response.data.user_details);
                console.log(commissions);
            }
        })
        .catch(error => {
            console.error('Error fetching commissions:', error);
        });
    };


    const fetchCommissions = () => {
        getCommissions()
        .then(function (response) {
            console.log(response);
            console.log(response.data);
            if (response.data !== null) {
                setCommissions(response.data.commissions);
                console.log(commissions);
            }
        })
        .catch(error => {
            console.error('Error fetching commissions:', error);
        });
    };
    

    useEffect(() => {
        fetchCommissions();
    }, []);

    useEffect(() => {
        fetchSession();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#f8f7f7' } }>
            <TopHeader/>
            <View style={{ alignItems: 'center', height: '30%' }}>
                <Text style={styles.userName}>Hello {sessionData.user_name || "Undefined Name"}</Text>
                <Text style={{ fontSize: 18, marginTop: '5%' }}>New Commission</Text>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.whitespace} onPress={() => navigate('AddCommission')}>
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: '200'}}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.commissionsContainer}>
                <Text style={{ fontSize: 18, marginTop: '2%', textAlign: 'center' }}>Current Commissions</Text>
                <View style={styles.separator} />
                <Button title={"Refresh"} onPress={() => fetchCommissions() }/>
                <ScrollView>
                    {commissions.length === 0 ? (
                        <TouchableOpacity style={styles.whitespace}>
                            <Text>No Commissions Found</Text>
                        </TouchableOpacity>
                    ) : (
                    commissions.map((commission, index) => (
                        <TouchableOpacity key={index} style={styles.commissionItem} onPress={() =>
                            navigate('CommissionScreen', {
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
    );
}

const styles = {
    userName: {
        marginTop: '10%',
        fontSize: 20,
        fontWeight: 'bold',
    },
    commissionsContainer: {
        alignSelf: 'center',
        height: '60%',
        width: '90%',
        marginHorizontal: 20,
    },
    whitespace: {
        width: '40%',
        height: '25%',
        backgroundColor: '#e42c22',
        marginTop: '5%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    separator: {
        height: 2,
        backgroundColor: '#D6D6D6',
        width: '70%',
        alignSelf: 'center',
    },
    miniSeparator: {
        backgroundColor: '#d9d9d9',
        marginTop: '3%',
        alignSelf: 'center',
    },
    commissionItem: {
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        padding: 3,
        alignItems: 'center',
        width: '100%',
        height: 'auto',
    },
    commissionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    commissionDescription: {
        fontSize: 15,
        textAlign: 'center',
    }
};
