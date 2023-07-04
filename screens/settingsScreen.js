import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import image from '../assets/yandiyaLogo_Small.png';
import side from '../assets/corner.png';

export function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, height: '100%', backgroundColor: '#f8f7f7' }}>
      {/* Top red section */}
      <View
        style={{
          height: '40%',
          backgroundColor: '#e42c22',
          borderBottomRightRadius: 100,
        }}
      />
      {/* Logo image */}
      <ImageBackground source={image} style={style.initalScreenImage} />
      {/* Side corner image */}
      <ImageBackground source={side} style={{ height: 100, width: 100 }} />
      {/* Bottom white section */}
      <View
        style={{
          height: '60%',
          backgroundColor: '#f8f7f7',
          borderTopLeftRadius: 100,
        }}
      >
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
          }}
        >
          <View style={{ top: '30%' }}>
            {/* Logout button */}
            <Button
              color="#212121"
              onPress={() => navigation.navigate('LogOut')}
              title="Logout"
            />
            {/* Contact us button */}
            <Button
              color="#212121"
              onPress={() => navigation.navigate('Help')}
              title="Contact us"
            />
            {/* About us button */}
            <Button
              color="#212121"
              onPress={() => navigation.navigate('SettingsInfo')}
              title="About us"
            />
          </View>
          <View style={{ position: 'absolute', top: 0, right: 90 }}></View>
        </View>
      </View>
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
    top: '-10%',
  },
});

export default SettingsScreen;
