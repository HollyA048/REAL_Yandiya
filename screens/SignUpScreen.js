import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "../components/formStyles";
import TopHeader from '../components/Header';

export function SignUpScreen({ navigation: { navigate } }) {
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

  // Check if all input fields are filled
  const checkInputsFilled = () => {
    if (userName && email && password && passwordAgain) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const signUpWithServer = () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('user_name', userName);
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
              setStatus("Internal Server Error: Please Report to Dev Team");
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
    <View style={styles.container}>
      {/* Header */}
      <TopHeader/>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={{ flexDirection: 'column' }} horizontal={false}>
          <Text style={styles.formText}>Sign Up</Text>
          
          <TextInput
            style={styles.inputText}
            placeholder="Input Name"
            onChangeText={handleUserNameChange}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Input Email"
            onChangeText={handleEmailChange}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Input Password"
            secureTextEntry
            onChangeText={handlePasswordChange}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Re-enter Password"
            secureTextEntry
            onChangeText={handlePasswordChangeAgain}
          />
          
          {/* Status */}
          <Text style={styles.authenticateStatus}>{status}</Text>
          {/* Continue button */}
          <Button
            title="Continue"
            onPress={() => navigate('Login')}
            disabled={isButtonDisabled}
          />
            <Button
            title="Guest view"
            onPress={() => navigate('Home')}
          />
        </View>
      </View>

      {/* Login link */}
      <View style={styles.signUpButton}>
        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={styles.switchButton}
        >
          <Text style={styles.signUpButtonText}>Login instead</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
