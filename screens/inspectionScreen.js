import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Checkbox from 'expo-checkbox';

import side from '../assets/corner.png';

export function InspectionScreen({ navigation: { navigate } }) {
  // State variables for checkboxes
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  // ... other checkbox state variables

  return (
    // Everything contained within the screen
    <View style={{ flex: 1, height: '100%', backgroundColor: '#f8f7f7' }}>
      <View
        style={{
          height: '40%',
          backgroundColor: '#e42c22',
          borderBottomRightRadius: 100,
        }}
      />

      <ImageBackground
        source={require('../assets/yandiyaLogo_Small.png')}
        style={style.initalScreenImage}
      />

      <ImageBackground source={side} style={{ height: 100, width: 100 }} />

      {/* Box size */}
      <View
        style={{
          height: '60%',
          backgroundColor: '#f8f7f7',
          borderTopLeftRadius: 100,
        }}
      >
        <View
          style={{
            height: 330,
            width: 350,
            bottom: '6%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 20,
            elevation: 3,
            borderColor: 'black',
            borderWidth: 2,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              color: 'black',
            }}
          >
            {'\n'}Grounding Installation{'\n'}
            {'\n'}Heating panels installed correctly{'\n'}
            {'\n'}Heating panels fuse spurred{'\n'}
            {'\n'}MCCB/RCBO breaker tested{'\n'}
            {'\n'}Control system installed and setup correctly{'\n'}
            {'\n'}All system parts examined and working (4-hour test trial){'\n'}
          </Text>
          <Checkbox
            style={{ position: 'absolute', top: 20, left: 250 }}
            value={checked}
            onValueChange={setChecked}
            color="green"
          />
          <Checkbox
            style={{ position: 'absolute', top: 56, left: 250 }}
            value={checked1}
            onValueChange={setChecked1}
            color="green"
          />
          <Checkbox
            style={{ position: 'absolute', top: 90, left: 250 }}
            value={checked2}
            onValueChange={setChecked2}
            color="green"
          />
          {/* Render other checkboxes */}
          {/* ... */}

          <Text>{'\n'}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate('main')}
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
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            position: 'absolute',
            left: 12,
            top: 10,
          }}
        >
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
});
