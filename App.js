import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { homeScreen } from './screens/homeScreen';
import { InfoScreen} from './screens/infoScreen';
import { inspectionScreen } from './screens/inspectionScreen';
import { LoginScreen } from './screens/logInScreen';
import { LogOut } from './screens/logoutScreen';
import { preCommission } from './screens/preComScreen';
import { ProjectHub } from './screens/projectHub';
import { SignUpScreen } from './screens/signUpScreen';
import { SettingsScreen } from './screens/settingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Add any stack navigation screens here
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='First'>
      <Stack.Screen
        name="First"
        component={LoginScreen}
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
          component={LoginScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="ProjectHub"
          component={ProjectHub}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/icon.png')} // change to the correct icon
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
          component={homeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require('./assets/icon.png')} // change to the correct icon
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
                  source={require('./assets/icon.png')} // change to the correct icon
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
