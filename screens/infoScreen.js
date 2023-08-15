import React, { useEffect, useState, useRef, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import image from '../assets/yandiyaLogo_Small.png';
import icon from '../assets/yandiyaLogo_Wide.png';
import bottom from '../assets/bottom.jpg';


//Menu function

export function infoScreen({ navigation: { navigate } }) {
  const [client, setClient] = useState('');
  const [location, setLocation] = useState('');
  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleLocationChange = (text) => {
    setLocation(text);
    checkInputsFilled();
  };
  const handleAddressChange = (text) => {
    setAddress(text);
    checkInputsFilled();
  };
  const handleCityChange = (text) => {
    setCity(text);
    checkInputsFilled();
  };
  const handlepostChange = (text) => {
    setPostCode(text);
    checkInputsFilled();
  };
  const handlephoneChange = (text) => {
    setPhoneNumber(text);
    checkInputsFilled();
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    checkInputsFilled();
  };
  const handleContactChange = (text) => {
    setContactPerson(text);
    checkInputsFilled();
  };

  const checkInputsFilled = () => {
    if (
      location &&
      postCode &&
      address &&
      city &&
      email &&
      phoneNumber &&
      contactPerson
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: '#f8f7f7', flex: 1 }}>
        <View
          style={{
            backgroundColor: '#e42c22',
            height: '18%',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            paddingHorizontal: 20,
          }}>
          <ImageBackground source={image} style={styles.image} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '15%',
              marginLeft: '15%',
              width: '100%',
            }}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}></Text>
            </View>
          </View>
        </View>
        <View 
          style={{
            backgroundColor: 'white',
            height: '68%',
            width: '70%',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: 20,
            marginLeft: '15%',
            marginTop: '10%',
            borderWidth: 2,
            borderColor: 'black'
          }}>
           <ScrollView
          style={{ flexDirection: 'column' }}
          horizontal={false}>
          <View>
            <Text> Job information :{'\n'}</Text>
            <Text>{"\n"}Client Name:</Text>
            <TextInput
              placeholder="client"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setClient(text)}></TextInput>
            <Text>{"\n"}Client Location:{'\n'}</Text>
            <TextInput
              placeholder="Location"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={location}
              onChangeText={handleLocationChange}></TextInput>
            <Text>{"\n"}Client Address:{'\n'}</Text>
            <TextInput
              placeholder="address"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={address}
              onChangeText={handleAddressChange}></TextInput>
            <Text> Client City:{'\n'}</Text>
            <TextInput
              placeholder="City"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={city}
              onChangeText={handleCityChange}></TextInput>
            <Text>{"\n"}Client post code:{'\n'}</Text>
            <TextInput
              placeholder="post code"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={postCode}
              onChangeText={handlepostChange}></TextInput>
            <Text>{"\n"}Client phone number:{'\n'}</Text>
            <TextInput
              placeholder="phone number"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={phoneNumber}
              onChangeText={handlephoneChange}></TextInput>
            <Text>{"\n"}Client Email:{'\n'}</Text>
            <TextInput
              placeholder="Email"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={email}
              onChangeText={handleEmailChange}></TextInput>
            <Text>{"\n"}Contact:{'\n'}</Text>
            <TextInput
              placeholder="contact person"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={contactPerson}
              onChangeText={handleContactChange}></TextInput>
             <Text>{"\n"} Optional: Third Party Installer:{'\n'}</Text>
            <TextInput
              placeholder="installer"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={contactPerson}
              onChangeText={handleContactChange}></TextInput>
               
          </View>
        </ScrollView>
        <Button
          color="green"
          onPress={() => navigate('comForm')}
          title="proceed"
          disabled={isButtonDisabled}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 190,
    height: 200,
    flex: 1,
    position: 'absolute',
    top: -15,
    right: 0,
  },
});
