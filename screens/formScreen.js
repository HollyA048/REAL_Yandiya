import React, { useState } from 'react';
import { View, Text, Button, ScrollView, ImageBackground, Dimensions } from 'react-native';
import Checkbox from 'expo-checkbox';
import bottom from '../assets/bottom.jpg';

export function FormScreen({ navigation: { navigate } }) {
  // State variables for checkboxes
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);

  return (
    <View>
      {/* Image positioned at the bottom of the screen */}
      <ImageBackground
        source={bottom}
        style={{
          width: 390,
          height: 90,
          position: 'absolute',
          top: 760,
          left: 0,
          shadowColor: 'black',
          shadowRadius: 14.65,
          shadowOpacity: 5,
        }}
      />

      {/* Red bar */}
      <View
        style={{
          width: '100%',
          backgroundColor: '#e42c22',
          borderRadius: 20,
          position: 'absolute',
          left: -8,
          top: 0,
          shadowColor: 'red',
          shadowRadius: 14.65,
          shadowOpacity: 1,
        }}
      />

      {/* Yandiya logo */}
      <ImageBackground
        source={require('../assets/yandiyaLogo_Small.png')}
        style={{
          width: Dimensions.get('window').width * 0.6,
          height: Dimensions.get('window').height * 0.3,
          position: 'absolute',
          top: Dimensions.get('window').height * -0.04,
          left: Dimensions.get('window').width * 0.18,
        }}
      />

      {/* Form container */}
      <View
        style={{
          height: 620,
          width: 300,
          backgroundColor: '#ffffff',
          border: 'black',
          position: 'absolute',
          top: 110,
          left: 45,
          borderRadius: 10,
          boxShadow: '10px 10px 30px #454545',
          borderWidth: 2,
          borderColor: '#000000',
        }}
      >
        <ScrollView>
          {/* Checkbox 1 */}
          <View
            style={{
              height: 50,
              width: 220,
              backgroundColor: 'white',
              position: 'absolute',
              top: 20,
              left: 50,
              borderWidth: 2,
              borderColor: '#000000',
            }}
          >
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
              Visually checked wiring resistance and sizing of cables
            </Text>
          </View>
          <Checkbox
            style={{ position: 'absolute', top: 30, left: 20 }}
            value={checked}
            onValueChange={setChecked}
          />

          {/* Checkbox 2 */}
          <View
            style={{
              height: 50,
              width: 220,
              backgroundColor: 'white',
              position: 'absolute',
              top: 90,
              left: 50,
              borderWidth: 2,
              borderColor: '#000000',
            }}
          >
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
              Visually checked all spurs
            </Text>
          </View>
          <Checkbox
            style={{ position: 'absolute', top: 100, left: 20 }}
            value={checked1}
            onValueChange={setChecked1}
          />

          {/* Checkbox 3 */}
          {/* ...and so on for the remaining checkboxes... */}

          {/* Continue button */}
          <View style={{ position: 'absolute', top: 580, right: 90, fontWeight: 'bold' }}>
            <Button color="green" onPress={() => navigate('main')} title="Continue" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
