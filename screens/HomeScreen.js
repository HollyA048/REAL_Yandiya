import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "../stylesheets/Home";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const Stack = createStackNavigator();

const getCommissions = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: "http://188.39.66.240:9080/get_commissions.php",
            responseType: "json",
        })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
    });
};

const getSession = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: "http://188.39.66.240:9080/get_session.php",
            responseType: "json",
        })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
    });
};

export function HomeScreen({ navigation: { navigate } }) {
    const [commissions, setCommissions] = useState([]);
    const [sessionData, setSessionData] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [filteredCommissions, setFilteredCommissions] = useState([]);

    const fetchSession = () => {
        getSession()
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                if (response.data !== null) {
                    setSessionData(response.data.user_details);
                }
            })
            .catch((error) => {
                console.error("Error fetching session:", error);
            });
    };

    const fetchCommissions = () => {
        getCommissions()
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                if (response.data !== null) {
                    setCommissions(response.data.commissions);
                }
            })
            .catch((error) => {
                console.error("Error fetching commissions:", error);
            });
    };

    const handleSearch = () => {
        if (searchPhrase.trim() === "") {
            setFilteredCommissions(commissions);
        } else {
            const filtered = commissions.filter((commission) =>
                commission.title.toLowerCase().includes(searchPhrase.toLowerCase())
            );
            setFilteredCommissions(filtered);
        }
    };

    useEffect(() => {
        fetchCommissions();
    }, []);

    useEffect(() => {
        fetchSession();
    }, []);

    useEffect(() => {
        handleSearch();
    }, [searchPhrase, commissions]);

    return (
        <View style={{ flex: 1, backgroundColor: "#f8f7f7" }}>

            <View style={{ alignItems: "center", height: "20%" }}>
                <Text style={styles.userName}>Welcome, {sessionData.user_name || "Undefined Name"}</Text>
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
                <TouchableOpacity style={styles.whitespace} onPress={() => navigate("AddCommission")}>
                    <Image
                        source={require("../assets/add.png")}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                            top: -15,
                            tintColor: "#006EFF",
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.commissionsContainer}>
                <Text style={{ fontSize: 19, marginTop: "2%", textAlign: "center" }}>Current Commissions</Text>
                <View style={styles.separator} />
                <Button title={"Refresh"} onPress={() => fetchCommissions()} />
                <View style={styles.ScrollContainer}>
                    <ScrollView contentContainerStyle={styles.ScrollItem}>
                        {commissions.length === 0 ? (
                            <TouchableOpacity style={styles.whitespace}>
                                <Text>No Commissions Found</Text>
                            </TouchableOpacity>
                        ) : (
                            filteredCommissions.map((commission, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.commissionItem}
                                    onPress={() =>
                                        navigate("CommissionScreen", {
                                            commission_id: commission.id,
                                        })
                                    }
                                >
                                    <Text style={styles.commissionTitle}>{commission.title}</Text>
                                    <View style={styles.miniSeparator} />
                                    <Text style={styles.commissionDescription}>{commission.description}</Text>
                                    <Text style={styles.commissionDescription}>{commission.timestamp !== null ? new Date(commission.timestamp * 1000).toUTCString() : "No Date Recorded!"}</Text>
                                </TouchableOpacity>
                            ))
                        )}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}
