import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from '../stylesheets/JobIntel';
import { TextStyle } from '../stylesheets/span';
import data from '../json_stuff/dashboard.json';

const image = require('../assets/yandiyaLogo_Small.png');

export function JobInfoBox({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Job Info Screen</Text>
      </View>

      <View style={styles.contain}>
            {/*this will be changed to read the clients info from AJ's database*/}
            <View style={styles.clientInfoBox}>
              <Text style={styles.clientText}>
              <Text style={TextStyle.bold}>
              Location of the job
              </Text>
              {'\n'}{'\n'}
              Wait for aj to fix the databse
              {'\n'}{'\n'}
              <Text style={TextStyle.bold}>
              Site Manager Email
              </Text>
              {'\n'}{'\n'}
              Wait for aj to fix the databse
              {'\n'}{'\n'}
              <Text style={TextStyle.bold}>
              Site Manager Phone
              </Text>
              {'\n'}{'\n'}
              Wait for aj to fix the databse
              </Text>
            </View>

            <View style={styles.flexContainer}>
              <ScrollView style={styles.flexScroll}>
                {/*reads json_stuff/dashboard.json and if data is more than 0 will add a text box with an item of data one at a time from dashboard*/}
                {data.length === 0 ? (
                  <View>
                    <Text>Not found</Text>
                  </View>
                ) : (
                  data.map((stuff) => (
                    <View style={styles.flexItemLeft}>
                      <Text style={styles.flexText}>{stuff.description}</Text>
                    </View>
                  ))
                )}
              </ScrollView>
            </View>

      </View>

      {/*returns user to previous page*/}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style ={styles.continue}>
            <Text style={styles.continue_button}>RETURN</Text>
          </View>
      </TouchableOpacity>

      <Image source = {image} style = {styles.logo}/>

    </View>
  );
}
