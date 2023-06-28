import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import icon from '../assets/yandiyaLogo_Small.png';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const fontSizePercentage = 0.05; // Adjust this value to set the desired percentage font size
const fontSize = Math.min(width, height) * fontSizePercentage;

export function FirstScreen() {
  const navigation = useNavigation();

  // Function to navigate to the HomeScreen
  const goToHomeScreen = () => {
    navigation.navigate('Home'); // Replace 'Home' with the actual name of your HomeScreen component
  };

  let content = null;

  // Platform-specific content
  if (Platform.OS === 'ios') {
    content = (
      <View style={{ top: '30%' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonContainer1}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sign Up')}
          style={styles.buttonContainer2}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (Platform.OS === 'android') {
    content = (
      <View>
        <Text>This is Android specific content</Text>
        <Button color="green" onPress={goToHomeScreen} title="Continue" />
      </View>
    );
  } else {
    content = (
      <View>
        <Text>This is content for other operating systems</Text>
        <Button color="green" onPress={goToHomeScreen} title="Continue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={icon} style={styles.logoContainer} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Mobile Commissioning Process</Text>
      </View>

      <Text style={styles.welcomeText}>
        Welcome to the Yandiya Technologies Commissions App!
      </Text>

      <View style={styles.contentContainer}>{content}</View>

      <View style={styles.footerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f7',
  },
  logoContainer: {
    width: '75%',
    height: '75%',
    marginTop: '50%',
    marginLeft: '23%',
    shadowColor: 'black',
    shadowRadius: 9.65,
    shadowOpacity: 1,
    position: 'absolute',
  },
  headerContainer: {
    width: '100%',
    height: '20%',
    backgroundColor: '#e42c22',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 15,
    justifyContent: 'center',
  },
  headerText: {
    fontSize,
    fontWeight: 'bold',
    width: '60%',
    textAlign: 'center',
    left: '20%',
    color: 'white',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: fontSize * 0.7,
    top: '22%',
    position: 'absolute',
    justifySelf: 'center',
    left: '5%',
  },
  contentContainer: {
    top: '40%',
    left: '30%',
    height: '40%',
    width: '40%',
  },
  buttonContainer1: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#e42c22',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 0,
    borderColor: '#dd0000',
    borderWidth: 1.5,
  },
  footerContainer: {
    height: '10%',
    backgroundColor: 'red',
    bottom: '0%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 3,
    justifyContent: 'center',
    position: 'absolute',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer2: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#e42c22',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginVertical: 50,
    borderColor: '#dd0000',
    borderWidth: 1.5,
  },
});

export default FirstScreen;
