import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screen/HomeScreen';
import { FirstScreen } from './screen/firstScreen';
import { FormScreen } from './screen/formScreen';
import { HelpScreen } from './screen/helpScreen';
import { InfoScreen} from './screen/infoScreen';
import { inspectionScreen } from './screen/inspectionScreen';
import { SettingsScreen } from './screen/Settings';
import { installInfo } from './screen/install';
import { LoginScreen } from './screen/logInScreen';
import { LogOut } from './screen/logoutScreen';
import { preCommission } from './screen/preCom';
import { ProductInfo, productInfo } from './screen/productInfo';
import { ProjectHub } from './screen/projectHub';
import { SettingsInfo } from './screen/settingsInfo';
import { SignUpScreen } from './screen/signUpScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Add any stack navigation screens here
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='First'>
      <Stack.Screen
        name="First"
        component={FirstScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarStyle: { display: 'none' },
        })}
      />
    </Stack.Navigator>
  );
}

// Contains the tab navigator
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HUB"
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            height: '50%',
            backgroundColor: '#ffffff',
            borderRadius: 15,
          },
        }}>
        <Tab.Screen
          name="Initial"
          component={FirstScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="Test"
          component={InfoScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/pdf-file.png')}
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
                    fontFamily: 'Manrope',
                    fontWeight: '300',
                    fontSize: 10,
                    position: 'absolute',
                    top: '60%',
                    textDecorationColor: focused ? '#e42c22' : '#202120',
                  }}>
                  Project Hub
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="HUB"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarStyle: { display: 'none' },
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require('./assets/add.png')}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    top: -15,
                    tintColor: focused ? '#e42c22' : '#e42c22',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/Settings.png')}
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
                    fontFamily: 'Manrope',
                    fontWeight: '300',
                    fontSize: 10,
                    position: 'absolute',
                    top: '60%',
                    textDecorationColor: focused ? '#e42c22' : '#202120',
                  }}>
                  Settings
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="LogOut"
          component={LogOut}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="Help"
          component={HelpScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="SettingsInfo"
          component={SettingsInfo}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
