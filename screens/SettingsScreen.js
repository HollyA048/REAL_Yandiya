import React from 'react';
import {Button, ImageBackground, StyleSheet, View,} from 'react-native';
import icon from '../assets/yandiyaLogo_Wide.png';

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
          style={{paddinghorizontal: 5}}
          color="#212121"
          onPress={() => navigate('LogOut')}
          title="Logout"
        />
        <Button
          color="#212121"
          style={{paddinghorizontal: 5}}
          onPress={() => navigate('Help')}
          title="Contact us"
        />
      </View>
    </View>
  );
}

/*Styling for picture (small one) if we wanna use it*/
const style = StyleSheet.create({
  initalScreenImage: {
    width: 300,
    height: 200,
    display: 'flex',
    alignSelf: 'center',
  },
  /*Styling for picture*/
  iconStyle: {
    width: 400,
    height: 100,
    display: 'flex',
    alignSelf: 'center',
    padding: 70,
  },
});
