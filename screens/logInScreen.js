import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import facebook from '../assets/facebook.jpeg';
import google from '../assets/google.jpeg';
import linkedin from '../assets/linkedin.jpeg';
import { ScrollView } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

const icon = { uri: 'https://i.imgur.com/5QVr3RA.png' };

export function LoginScreen({ navigation }) {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (text) => {
    setEmail(text);
    checkInputsFilled();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkInputsFilled();
  };

  // Event handlers for opening external links
  const handleEmailPress = () => {
    Linking.openURL('mailto:example@gmail.com');
  };
  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/your-profile-url');
  };
  const handleFacebookPress = () => {
    Linking.openURL('https://en-gb.facebook.com/in/your-profile-url');
  };
  const handleGooglePress = () => {
    Linking.openURL('https://accounts.google.com/signin/recovery/lookup');
  };

  const checkInputsFilled = () => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f7f7' }}>
      {/* Header */}
      <View
        style={{
          height: '20%',
          backgroundColor: 'red',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          elevation: 15,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            width: '50%',
            textAlign: 'center',
            left: '5%',
            color: 'white',
          }}>
          Yandiya Technologies
        </Text>

        <ImageBackground source={icon} style={styles.outImage} />
      </View>

      {/* Tagline */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          "A new world of warmth"
        </Text>
      </View>

      {/* Login form */}
             {/* Form */}
             <View
          style={{
            height: '50%',
            marginLeft: '10%',
            width: '80%',
            marginTop: '15%',
            backgroundColor: 'white',
            borderBottomLeftRadius: 100,
            borderTopRightRadius: 100,
            paddingHorizontal: 20,
            shadowColor: 'black',
            shadowRadius: 9.65,
            shadowOpacity: 1,
          }}
        >
        <ScrollView style={{ flexDirection: 'column' }} horizontal={false}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              top: 0,
              fontWeight: 'bold',
            }}
          >
            Login
          </Text>
          <Text style={{ marginVertical: 18, left: 30 }}>{'Input Email'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            onChangeText={handleEmailChange}
          />
          {/* Password input */}
          <Text style={{ marginVertical: 18, left: 30 }}>{'Input Password'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            secureTextEntry
            onChangeText={handlePasswordChange}
          />

          {/* Continue button */}
          <Button
            title="Continue"
            onPress={() => navigate("main")}
            disabled={isButtonDisabled}
          />

          {/* Social media buttons */}
          <TouchableOpacity onPress={handleFacebookPress}>
            <ImageBackground
              source={facebook}
              style={{
                height: 40,
                width: 40,
                position: 'absolute',
                left: '25%',
                marginTop: '10%',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGooglePress}>
            <ImageBackground
              source={google}
              style={{
                height: 40,
                width: 40,
                position: 'absolute',
                left: '45%',
                marginTop: '10%',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLinkedInPress}>
            <ImageBackground
              source={linkedin}
              style={{
                height: 40,
                width: 40,
                position: 'absolute',
                left: '65%',
                marginTop: '10%',
              }}
            />
          </TouchableOpacity>
          </ScrollView>
        </View>
		
      {/* Sign up button */}
      <View
        style={{
          height: '10%',
          backgroundColor: 'red',
          bottom: '0%',
          width: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 3,
          justifyContent: 'center',
          position: 'absolute',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sign Up')}
          style={{
            height: 30,
            width: 140,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outImage: {
    width: 190,
    height: 200,
    flex: 1,
    position: 'absolute',
    right: '-5%',
  },
});
