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

const icon = { uri: 'https://i.imgur.com/5QVr3RA.png' };

// Importing images
import facebook from '../assets/facebook.jpeg';
import google from '../assets/google.jpeg';
import linkedin from '../assets/linkedin.jpeg';
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";

export function SignUpScreen({navigation: { navigate }}) {
  // State variables
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Event handlers for input changes
  const handleUserNameChange = (text) => {
    setUserName(text);
    checkInputsFilled();
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    checkInputsFilled();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkInputsFilled();
  };

  const handlePasswordChangeAgain = (text) => {
    setPasswordAgain(text);
    checkInputsFilled();
  };

  // Event handlers for external links
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

  // Check if all input fields are filled
  const checkInputsFilled = () => {
    if (email && password && passwordAgain) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const signUpWithServer = () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('user_name', email); // change this later on to an actual username
    fetch(`http://188.39.66.240:9080/sign_up.php`, {
      method: 'POST',
      body: formData,
    })
        .then(response => {
          if (!response.ok) {
            switch (response.status) {
              case 401:
                setStatus("Incorrect User Name or Password");
                return;
              case 500:
                setStatus("Internal Server Error: Please Report to Dev Team")
                return;
              default:
                setStatus("Error: " + response.status);
                return;
            }
          }
          else {
            navigation.navigate("Home");
          }
        })
        .catch(error => {
          console.error(error.message);
        });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f7f7', height: '100%'}}>
      {/* Header */}
      <View
        style={{
          height: '20%',
          width: '100%',
          backgroundColor: 'red',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          elevation: 15,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            width: '50%',
            textAlign: 'center',
            left: '5%',
            color: 'white',
          }}
        >
          Yandiya Technologies
        </Text>
        <ImageBackground source={icon} style={styles.outImage} />
      </View>

      {/* Subtitle */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          "A new world of warmth"
        </Text>
      </View>

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
            Sign Up
          </Text>
          <Text style={{ marginVertical: 16, left: 30 }}>{'Input Email'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            onChangeText={handleEmailChange}
          />
          <Text style={{ marginVertical: 16, left: 30 }}>{'Input Password'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            secureTextEntry
            onChangeText={handlePasswordChange}
          />
          <Text style={{ marginVertical: 16, left: 30 }}>{'Re-enter Password'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            secureTextEntry
            onChangeText={handlePasswordChangeAgain}
          />
          {/* Status */}
          <Text style={styles.authenticateStatus}>{status}</Text>
          {/* Continue button */}
          <Button
            title="Continue"
            onPress={() => signUpWithServer()}
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

      {/* Login link */}
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
        }}
      >
        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={{
            height: 30,
            width: 140,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Login instead
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
  authenticateStatus: {
    color: 'red',
  }
});

export default SignUpScreen;
