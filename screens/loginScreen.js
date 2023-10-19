import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../components/formStyles';
import { fonts } from '../components/Fonts.js'; // Import the custom font style
import * as Font from 'expo-font'; // Import expo-font
import TopHeader from '../components/Header';

export function LoginScreen({ navigation: { navigate } }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (text) => {
    setEmail(text);
    checkInputsFilled();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkInputsFilled();
  };

  const checkInputsFilled = () => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const authenticateWithServer = () => {
    const formData = new FormData();
    formData.append('email', email);
    fetch(`http://188.39.66.240:9080/authenticate.php`, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          switch (response.status) {
            case 401:
              setStatus('Incorrect Email or Password');
              return;
            case 500:
              setStatus('Internal Server Error: Please Report to Dev Team');
              return;
            default:
              setStatus('Error: ' + response.status);
              return;
          }
        } else {
          navigate('Home');
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TopHeader/>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={{ flexDirection: 'column' }} horizontal={false}>
          <Text style={[styles.formText, fonts.default]}>Login</Text>
          <TextInput style={[styles.inputText, fonts.default]} placeholder="Email" onChangeText={handleEmailChange} />
          <TextInput
            style={[styles.inputText, fonts.default]}
            placeholder="Password"
            secureTextEntry
            onChangeText={handlePasswordChange}
          />
          <Text style={[styles.authenticateStatus, fonts.default]}>{status}</Text>
          <Button title="Continue" onPress={() => authenticateWithServer()} disabled={isButtonDisabled} />
        </View>
      </View>

      <View style={styles.signUpButton}>
        <TouchableOpacity
          onPress={() => navigate('SignUp')}
          style={styles.switchButton}>
          <Text style={[styles.signUpButtonText, fonts.default]}>Sign Up instead</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
