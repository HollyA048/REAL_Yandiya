import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const image = { uri: 'https://i.imgur.com/A8WIsR2.png' };

export function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: '#f8f7f7', flex: 1}}>
        {/* Header */}
        <View
          style={{
            height: '20%',
            width: '100%',
            backgroundColor: 'red',
            justifyContent: 'center',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          {/* Background image */}
          <ImageBackground source={image} style={styles.image} />
          <Text style={{ fontSize: 25, left: '10%', fontWeight: 'bold' }}>
            Welcome
          </Text>
        </View>
        <ScrollView>
          {/* New Commission section */}
          <View style={{ alignItems: 'center', height: 300, marginTop: '5%' }}>
            <Text style={{ fontSize: 18 }}>New Commission</Text>
            {/* Divider */}
            <View
              style={{
                height: 3,
                backgroundColor: '#e42c22',
                width: 200,
                marginTop: -2,
                alignSelf: 'center',
              }}
            />

            {/* Add New Commission button */}
            <TouchableOpacity
              style={{
                width: '60%',
                height: '25%',
                backgroundColor: 'white',
                marginTop: '10%',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>+</Text>
              <Text>Add New Commission</Text>
            </TouchableOpacity>
          </View>
          {/* Current Commissions section */}
          <View style={{ alignItems: 'center', height: 300 }}>
            <Text style={{ fontSize: 18 }}>Current Commissions</Text>
            {/* Divider */}
            <View
              style={{
                height: 3,
                backgroundColor: '#e42c22',
                width: 200,
                marginTop: -2,
                alignSelf: 'center',
              }}
            />

            {/* Placeholder commission */}
            <TouchableOpacity
              style={{
                width: '60%',
                height: '25%',
                backgroundColor: 'white',
                marginTop: '10%',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Placeholder here</Text>
              <Text style={{ textAlign: 'center' }}>
                Hopefully we can somehow link an already made commission here
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '70%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    top: '20%',
    right: '-20%',
  },
});
