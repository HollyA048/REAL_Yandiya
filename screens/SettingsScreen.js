import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  setInput,
  Pressable,
  ImageBackground,
  AppRegistry,
  Platform,
  input,
  container,
  Dimensions,
  Switch,
  TouchableOpacity,
} from 'react-native';

const window = Dimensions.get('window');
const styles = './styles.js';

import image from '../assets/yandiyaLogo_Small.png';
import icon from '../assets/yandiyaLogo_Wide.png';
import bottom from '../assets/bottom.jpg';
import side from '../assets/corner.png';

export function SettingsScreen({ navigation: { navigate } }) {
  return (
    <View style={{ height: '100%', backgroundColor: '#f8f7f7' }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        {/*Image*/}
        <ImageBackground source={icon} style={style.iconStyle}/>
        {/*Buttons in the middle*/}
        <Button
          color="#212121"
          onPress={() => navigate('LogOut')}
          title="Logout"
        />
        <Button
          color="#212121"
          onPress={() => navigate('Help')}
          title="Contact us"
        />
        <Button
          color="#212121"
          onPress={() => navigate('settingsInfo')}
          title="About us"
        />
      </View>
    </View>
  );
}

{/*Styling for picture (small one) if we wanna use it*/}
const style = StyleSheet.create({
  initalScreenImage: {
    width: 300,
    height: 200,
    display: 'flex',
    alignSelf: 'center',
  },
  {/*Styling for picture*/}
  iconStyle: {
    width: 400,
    height: 100,
    display: 'flex',
    alignSelf: 'center',
    padding: 70,
  },
});
