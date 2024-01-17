import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { InspectionScreen } from './screens/InspectionScreen';
import { LoginScreen } from './screens/LoginScreen';
import { LogOut } from './screens/LogoutScreen';
import { CommissionScreen } from './screens/CommissionScreen';
import { PDFPage } from './screens/PDFScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { AddCommissionScreen } from './screens/AddCommissionScreen';
import { SignOff } from './screens/SignOffScreen';
import { JobInfoBox } from './screens/JobIntelScreen';
import { HelpScreen } from './screens/HelpScreen';
import { HomeScreen } from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

const createTabBarIcon = (imageSource, focused, label) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Image
      source={imageSource}
      resizeMode="contain"
      style={{
        bottom: '40%',
        width: 25,
        height: 25,
        tintColor: focused ? '#e42c22' : '#202120',
      }}
    />
    <Text
      style={{
        color: '#000000',
        fontWeight: '300',
        fontSize: 10,
        position: 'absolute',
        top: '60%',
        textDecorationColor: focused ? '#e42c22' : '#202120',
      }}>
      {label}
    </Text>
  </View>
);

const commonTabOptions = {
  headerShown: false,
};

const HiddenTabScreen = {
  tabBarButton: () => null,
  headerShown: false,
  tabBarStyle: { display: 'none' },
};

function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            height: '50%',
            backgroundColor: '#ffffff',
            borderRadius: 15,
            tabBarStyle: {display: 'none'},
          },
        }}>
        <Tab.Screen name="login" component={LoginScreen} options={HiddenTabScreen} />
        <Tab.Screen name="ProjectHub" component={PDFPage} options={{...commonTabOptions, tabBarIcon: ({ focused }) => createTabBarIcon(require('./assets/pdf-file.png'), focused, 'ProjectHub')}} />
        <Tab.Screen name="Home" component={HomeScreen} options={{...commonTabOptions, tabBarIcon: ({ focused }) => <View><Image source={require('./assets/add.png')} resizeMode="contain" style={{ width: 50, height: 50, top: -15, tintColor: focused ? '#e42c22' : '#202120' }} /></View>}} />
        <Tab.Screen name="InspectionScreen" component={InspectionScreen} options={HiddenTabScreen} />
        <Tab.Screen name="CommissionScreen" component={CommissionScreen} options={HiddenTabScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{...commonTabOptions, tabBarIcon: ({ focused }) => createTabBarIcon(require('./assets/settings.png'), focused, 'Settings')}} />
        <Tab.Screen name="LogOut" component={LogOut} options={HiddenTabScreen} />
        <Tab.Screen name="AddCommission" component={AddCommissionScreen} options={HiddenTabScreen} />
        <Tab.Screen name="Login" component={LoginScreen} options={HiddenTabScreen} />
        <Tab.Screen name="SignUp" component={SignUpScreen} options={HiddenTabScreen} />
        <Tab.Screen name="sign_off" component={SignOff} options={HiddenTabScreen} />
        <Tab.Screen name="JobIntel" component={JobInfoBox} options={HiddenTabScreen} />
        <Tab.Screen name="Help" component={HelpScreen} options={HiddenTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;