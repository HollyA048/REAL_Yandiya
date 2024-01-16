import * as React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from '../stylesheets/PDF';
import axios from "axios";
import {useEffect, useState} from "react";

const generatePDFSlide = (index, title, file_path, numDocs) => (
    <View style={styles.slide} key={index}>
        <View style={styles.pageNumberTop}>
            <Text style={{ fontWeight: 'bold' }}>Page {index} of {numDocs}</Text>
        </View>

        <View style={styles.middleBox}>
            <Text style={styles.pdfTitle}>{title}</Text>
            <View style={styles.miniSeparator} />
            <View style={{ marginTop: '20%' }}>
                <TouchableOpacity
                    onPress={() => downloadPDF(file_path)}
                >
                    <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const downloadPDF = (file_path) => {
    // open up the pdf file in the users' web browser
    const url = `http://188.39.66.240:9080/pdf/${file_path}`;
    Linking.openURL(url);
};

const documentsNetworkRequest = () => {
    // send network request for pdfs
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: "http://188.39.66.240:9080/get_documents.php",
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
}

export function PDFPage() {
    const [documents, setDocuments] = useState([]);
    const getDocuments = () => {
        // runs documentNetworkRequest() and then sets that data
        documentsNetworkRequest()
            .then(function (response) {
                if (response.data !== null) {
                    try {
                        setDocuments(response.data.documents);
                    } catch (e) {
                        // maybe add handling for invalid data?
                        console.log("Invalid document data")
                    }
                }
            })
            .catch((error) => {
                // handle errors here
                console.error("Error fetching documents:", error);
            });
    }

    useEffect(() => {
        getDocuments();
    }, []);

    let index = 1; // index is just made up from the amount of documents sent, not tied to any data!
    return (
        <Swiper showsButtons={true} showsPagination={false}>
            {documents.map(({ title, file_path }) => generatePDFSlide(index++, title, file_path, documents.length)
            )}
        </Swiper>
    );
}

const App = () => {
    return (
        <View style={styles.container}>
            <MySwiper/>
        </View>
    );
};

export default App;
