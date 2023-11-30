import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from '../stylesheets/signoff_css';
const image = require('../assets/yandiyaLogo_Small.png');


export function SignOff({ navigation }) {

    return (
        <View style={styles.container}>
          {/* this is the whole screen*/}
          
          <View style={styles.header}>
            <Text style = {styles.headerText}>Sign-Off</Text>
          </View>
    
          {/*this is where the company name wlll be displayed
             this will be replaced with AJ's php code*/}
          <View style ={styles.CompanyBox}>
            <Text style={styles.companyText}>Location placeholder</Text>
          </View>
    
          {/*use this when you want to leave space */}
          <View style = {styles.divider}></View>
    
          <TouchableOpacity style = {styles.jobInfoBox} onPress={() => navigation.navigate('job_info')}>
            <View>
              <Text style={styles.JobInfoText}>Job Information
              {/* when the database is fully running use this to input the job name */}
              </Text>
            </View>
          </TouchableOpacity>
          
          {/*use this when you want to leave space */}
          <View style = {styles.divider}></View>
   
          {/*not working at the moment, when pressed nothing happens*/}
          <View style={styles.jobInfoBox}>
          </View>
          
          <View style = {styles.divider}></View>
    
        {/* Directs you to the next page*/}
        <TouchableOpacity>
          <View style ={styles.continue}>
            <Text style={styles.continue_button}>Continue</Text>
          </View>
        </TouchableOpacity>

        <Image source = {image} style = {styles.logo}/>
    
        </View>
      );
}
