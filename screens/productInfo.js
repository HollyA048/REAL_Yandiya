//import lists
import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
} from 'react-native';

import side from '../assets/corner.png';
import Checkbox from 'expo-checkbox';

//product info menu
export function ProductInfo({ navigation }) {

  //different variables
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [done, isdone] = useState(false);
  function handleInputChange(text) {
    setInputValue(text);
  }

  return (
    //filling the screen
    <View style={{ flex: 1, height: '100%', backgroundColor: '#f8f7f7' }}>
      <View
        style={{
          height: '45%',
          backgroundColor: '#e42c22',
          borderBottomRightRadius: 100,
        }}>
        <View style={{ position: 'absolute', top: 50, left: 90}}>
          <Text style={{ marginVertical: 18, left: 30, color:"white", fontWeight: "bold" }}>{'product information'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5', width: 200,borderRadius: 20, borderColor: 'black',
            borderWidth: 2, }}
            placeholder="enter here"
            numberOfLines={3}
            maxLength={90}
          />
          <Text style={{ marginVertical: 18, left: 30, color:"white", fontWeight: "bold" }}>{'Model'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5', width: 200,borderRadius: 20, borderColor: 'black',
            borderWidth: 2, }}
            placeholder="enter here"
            numberOfLines={3}
            maxLength={90}
          />
          <Text style={{ marginVertical: 18, left: 30, color:"white", fontWeight: "bold" }}>{'serial number'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5', width: 200,borderRadius: 20, borderColor: 'black',
            borderWidth: 2, }}
            placeholder="enter here"
            numberOfLines={3}
            maxLength={90}
          />
        </View>
      </View>
      <ImageBackground source={side} style={{ height: 100, width: 100 }} />
      <View
        style={{
          height: '60%',
          backgroundColor: '#f8f7f7',
          borderTopLeftRadius: 100,
        }}>
        <View
          style={{
            height: 300,
            width: 275,
            bottom: '6%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 20,
            elevation: 3,
            borderColor: 'black',
            borderWidth: 2,
          }}>
          <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
            {'\n'}Installation{'\n'}
            {'\n'}Commissioning{'\n'}
            {'\n'}Re-examination{'\n'}
            {'\n'}Service{'\n'}
            {'\n'}Other
          </Text>
          <Checkbox
            style={{ position: 'absolute', top: 25, left: 50 }}
            value={checked}
            onValueChange={setChecked}
          />
          <Checkbox
            style={{ position: 'absolute', top: 60, left: 50 }}
            value={checked1}
            onValueChange={setChecked1}
          />
          <Checkbox
            style={{ position: 'absolute', top: 103, left: 50 }}
            value={checked2}
            onValueChange={setChecked2}
          />
          <Checkbox
            style={{ position: 'absolute', top: 140, left: 50 }}
            value={checked3}
            onValueChange={setChecked3}
          />
          <Text>{'\n'}</Text>
          <TextInput
            style={{
              bordercolor: 'black',
              borderWidth: 2,
              alignSelf: 'center',
            }}
            placeholder="enter reason"></TextInput>
        </View>
      </View>
    </View>
  );
}
