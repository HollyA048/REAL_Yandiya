import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';

import side from '../assets/corner.png';
const image = { uri: 'https://i.imgur.com/A8WIsR2.png' };

export function HelpScreen({ navigation: { navigate } }) {
  dialCall = () => {
    let phoneNumber = '';

    // Check the platform and set the phone number accordingly
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${07999482203}';
    } else {
      phoneNumber = 'telprompt:${07999482203}';
    }

    // Open the dialer with the phone number
    Linking.openURL(phoneNumber);
  };

  const handleEmailPress = () => {
    // Open the default email client with the specified email address
    Linking.openURL('mailto:info@yandiyatechnologies.com');
  };

  const handleNavPress = () => {
    // Open the specified URL in the default browser
    Linking.openURL('https://www.yandiyatechnologies.com/');
  };

  return (
    <View style={{ flex: 1, height: '100%', backgroundColor: '#f8f7f7' }}>
      {/* Red background */}
      <View
        style={{
          height: '40%',
          backgroundColor: '#e42c22',
          borderBottomRightRadius: 100,
        }}
      />

      {/* Background image */}
      <ImageBackground source={image} style={style.initalScreenImage} />

      {/* Side image */}
      <ImageBackground source={side} style={{ height: 100, width: 100 }} />

      {/* Content container */}
      <View
        style={{
          height: '60%',
          backgroundColor: '#f8f7f7',
          borderTopLeftRadius: 100,
        }}>
        {/* Information box */}
        <View
          style={{
            height: 300,
            width: 275,
            bottom: '6%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderTopLeftRadius: 100,
            borderBottomRightRadius: 100,
            elevation: 3,
          }}>
          <Text style={{ position: 'absoulute', top: 130, left: 20 }}>
            {/* Phone number */}
            <TouchableOpacity onPress={this.dialCall}>
              <Text style={{ color: 'black' }}>
                Tel no: +44 (0) 1329 556575 {'\n'}
                (currently used to troll liam)
              </Text>
            </TouchableOpacity>

            {'\n'}
            {'\n'}

            {/* Email address */}
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={{ color: 'black' }}>
                Email: info@yandiyatechnologies.com
              </Text>
            </TouchableOpacity>

            {'\n'}
            {'\n'}

            {/* Website URL */}
            <TouchableOpacity onPress={handleNavPress}>
              <Text style={{ color: 'black' }}>
                www.yandiyatechnologies.com
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>

      {/* Back button */}
      <TouchableOpacity
        onPress={() => navigate('Settings')}
        style={{
          position: 'absolute',
          top: 30,
          left: 0,
          backgroundColor: 'white',
          width: 75,
          height: 50,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            position: 'absolute',
            left: 12,
            top: 10,
          }}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  initalScreenImage: {
    width: 300,
    height: 500,
    flex: 1,
    position: 'absolute',
    right: '11%',
    top: '-5%',
  },
  topBackButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
    right: 3,
  },
});
