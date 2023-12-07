import {
  View,
  Button,
  ImageBackground,
  Dimensions,
  Text
} from 'react-native';
const styles = './styles.js';

import image from '../assets/yandiyaLogo_Small.png';

export function WelcomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: '#f8f7f7', flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: '10%',
          marginLeft: '0%',
          backgroundColor: '#e42c22',
          borderRadius: 20,
          shadowColor: 'red',
          shadowRadius: 14.65,
          shadowOpacity: 1,
        }}
      />
       <ImageBackground
        source={image}
        style={{
          width: '75%',
          height: '75%',
          marginTop: '0%',
          marginLeft: '23%',
          shadowColor: 'black',
          shadowRadius: 14.65,
          shadowOpacity: 5,
        }}
      />
      <Text
      style={{
        fontSize: 26,
        position: 'absolute',
        zIndex: 1,
        top: '20%',
        alignSelf: 'center',
        fontWeight: 'bold',
      }}>Welcome to Yandiya</Text>
       <View
        style={{
          width: '25%',
          height: '5%',
          border: 'black',
          marginTop: '-15%',
          marginLeft: '37%',
          borderRadius: 20,
        }}>
          <Button
            color="green"
            onPress={() => navigate('Sign Up')}
            title="Sign Up"
            style={{fontWeight: "bold"}}
          />

          </View>
           <View
        style={{
          width: '25%',
          height: '5%',
          border: 'black',
          marginTop: '1%',
          marginLeft: '37%',
          borderRadius: 20,
        }}>
          <Button
            style={styles.button}
            color="green"
            onPress={() => navigate('Login')}
            title="Log In"
          />
      </View>
    </View>
    </View>
  );
}