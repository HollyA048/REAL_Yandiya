import React from 'react';
import axios from 'axios';
import { Text, View, ScrollView, TouchableOpacity, Button, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import TopHeader from '../components/Header';
import SearchBar from "../components/SearchBar";
import { styles } from '../stylesheets/home_css';

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
        <View style={{ flex: 1, backgroundColor: '#f8f7f7' }}>
            <TopHeader />

            <View style={{ alignItems: 'center', height: '30%' }}>
                <Text style={styles.userName}>Welcome, {sessionData.user_name || "Undefined Name"}</Text>
                <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
                <TouchableOpacity style={styles.whitespace} onPress={() => navigate('AddCommission')}>
                    <Image
                        source={require('../assets/add.png')}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                            top: -15,
                            tintColor: '#006EFF',
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.commissionsContainer}>
                <Text style={{ fontSize: 18, marginTop: '2%', textAlign: 'center' }}>Current Commissions</Text>
                <View style={styles.separator} />
                <Button title={"Refresh"} onPress={() => fetchCommissions()} />
                <ScrollView style={styles.scroll_box}>
                    {commissions.length === 0 ? (
                        <TouchableOpacity style={styles.whitespace}>
                            <Text>No Commissions Found</Text>
                        </TouchableOpacity>
                    ) : (
                        commissions.map((commission, index) => (
                            <TouchableOpacity key={index} style={styles.commissionItem} onPress={() =>
                                navigate('CommissionScreen', {
                                    'commission_id': commission.id // passing the commission id into the inspection screen so that the relevant tasks can be shown
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
