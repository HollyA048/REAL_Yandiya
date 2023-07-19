import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

// Importing the images
import image from '../assets/yandiyaLogo_Small.png';
import side from '../assets/corner.png';

export function InfoScreen({ navigation: { navigate } }) {
  // State variables for storing input values
  const [Location, setLocation] = useState('');
  const [PostCode, setPostCode] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [City, setCity] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [installer, setInstaller] = useState('');
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

  const handlePostCodeChange = (text) => {
    setPostCode(text);
    checkInputsFilled();
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    checkInputsFilled();
  };

  const handleEmailChange = (text) => {
    // Check if the text contains "@"
    const hasAtSymbol = text.includes("@");

    // Update the state variable
    setEmail(text);
    checkInputsFilled();

    // Check if the email is valid and update the button disabled state
    if (hasAtSymbol && Email) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleContactChange = (text) => {
    setContactPerson(text);
    checkInputsFilled();
  };

  const checkInputsFilled = () => {
    if (Location && PostCode && Address && City && Email && PhoneNumber && contactPerson && handleEmailChange) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: '#f8f7f7', flex: 1 }}>
        {/* Top red section */}
        <View
          style={{
            height: '30%',
            backgroundColor: '#e42c22',
            borderBottomRightRadius: 100,
          }}
        />
        {/* Logo image */}
        <ImageBackground source={image} style={styles.initalScreenImage} />
        {/* Side corner image */}
        <ImageBackground source={side} style={{ height: 100, width: 100 }} />
        {/* Bottom white section */}
        <View
          style={{
            height: '10%',
            backgroundColor: '#f8f7f7',
            borderTopLeftRadius: 100,
          }}
        ></View>

        {/* Container for text inputs */}
        <View
          style={{
            backgroundColor: 'white',
            height: '60%',
            width: '80%',
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 50,
            paddingHorizontal: 20,
            marginLeft: '10%',
            marginTop: '-34%',
            borderWidth: 1,
            borderColor: 'black',
          }}
        >
          {/* Scrollable content */}
          <ScrollView style={{ flexDirection: 'column' }} horizontal={false}>
            <View>
              {/* Job information */}
              <Text> Job information :{'\n'}</Text>

              {/* Client Name */}
              <Text>{'\n'}Client Name:</Text>
              <TextInput
                placeholder="Client"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              />

              {/* Client Location */}
              <Text>{'\n'}Client Location:{'\n'}</Text>
              <TextInput
                placeholder="Location"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                value={Location}
                onChangeText={handleLocationChange}
              />

              {/* Client Address */}
              <Text>{'\n'}Client Adress:{'\n'}</Text>
              <TextInput
                placeholder="Address"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                value={Address}
                onChangeText={handleAddressChange}
              />

              {/* Client city */}
              <Text>{'\n'}Client City:{'\n'}</Text>
              <TextInput
                placeholder="City"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                value={City}
                onChangeText={handleCityChange}
              />

              {/* Client Post Code */}
              <Text>{'\n'}Client Post Code:{'\n'}</Text>
              <TextInput
                placeholder="PostCode"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                value={PostCode}
                onChangeText={handlePostCodeChange}
              />

              {/* Client Phone Number */}
              <Text>{'\n'}Client Phone Number:{'\n'}</Text>
              <TextInput
                placeholder="PhoneNumber"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                value={PhoneNumber}
                onChangeText={handlePhoneNumberChange}
              />

              {/* Client Email */}
              <Text>{'\n'}Client Email:{'\n'}</Text>
              <TextInput
                placeholder="Email"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                value={Email}
                onChangeText={handleEmailChange}
              />

              {/* Client Contact */}
              <Text>{'\n'}Client Contact:{'\n'}</Text>
              <TextInput
                placeholder="Contact"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                value={contactPerson}
                onChangeText={handleContactChange}
              />

              {/* Client Third party installer */}
              <Text>{'\n'}Optional: Client Location:{'\n'}</Text>
              <TextInput
                placeholder="Installer"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                value={installer}
                onChangeText={setInstaller}
              />

              {/* Other input fields */}
              {/* ... */}
            </View>
          </ScrollView>

          {/* Proceed button */}
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
  initalScreenImage: {
    width: 300,
    height: 500,
    flex: 1,
    position: 'absolute',
    right: '11%',
    top: '-15%',
  },
});