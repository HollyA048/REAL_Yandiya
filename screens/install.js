import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import bottom from '../assets/bottom.jpg';

export function InstallInfo({ navigation: { navigate } }) {
  // State variables for input values and button activation
  const [installer, setinstaller] = useState('');
  const [license, setlicense] = useState('');
  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Event handlers for input changes
  const handlelicenseChange = (text) => {
    setlicense(text);
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

  const checkInputsFilled = () => {
    // Check if all required fields are filled
    if (license && postCode && address && city && email && phoneNumber) {
      setIsButtonDisabled(false); // Enable the button
    } else {
      setIsButtonDisabled(true); // Disable the button
    }
  };

  return (
    <View style={styles.container}>
      {/* ImageBackground component */}
      {/* ... */}

      <TouchableOpacity
        onPress={() => navigate("main")}
        style={{
          position: 'absolute',
          top: 30,
          left: 0,
          backgroundColor: '#000000',
          width: 75,
          height: 50,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: 'center',
        }}>
        {/* Back Button Text */}
        <Text style={{ color: "white" }}>Back</Text>
      </TouchableOpacity>

      <View
        style={{
          height: 420,
          width: 300,
          backgroundColor: '#ffffff',
          border: 'black',
          position: 'absolute',
          top: 130,
          left: 45,
          borderRadius: 10,
          boxShadow: '10px 10px 30px #454545',
          borderWidth: 2,
          borderColor: '#000000',
        }}
      >
        <ScrollView style={{ flexDirection: 'column' }} horizontal={false}>
          <View>
            <Text> client info:</Text>
            <Text> Client Name:</Text>
            <TextInput
              placeholder="installer"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setinstaller(text)}
            ></TextInput>
            {/* ... */}
            {/* Render other TextInput fields */}
            {/* ... */}
          </View>
        </ScrollView>
        <Button
          color="red"
          onPress={() => navigate('comForm')}
          title="melon"
          disabled={isButtonDisabled} // Disable the button if inputs are not filled
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    // Add container styles if needed
  },
};
