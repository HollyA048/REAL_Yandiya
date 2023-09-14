import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { homeScreen } from './screens/homeScreen';
import { infoScreen } from './screens/infoScreen';
import { commissioningScreen } from './screens/commissioningScreen';
import { loginScreen } from './screens/loginScreen';
import { logOut } from './screens/logoutScreen';
import {preCom, preCommission} from './screens/preComScreen';
import { projectHub } from './screens/projectHub';
import { signUpScreen } from './screens/signUpScreen';
import { settingsScreen } from './screens/settingsScreen';
import { addCommissionScreen } from './screens/addCommissionScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Add any stack navigation screens here
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='First'>
      <Stack.Screen
        name="First"
        component={loginScreen}
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
          component={loginScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="ProjectHub"
          component={projectHub}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/pdf-file.png')} // change to the correct icon
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
          name="inspectionScreen"
          component={commissioningScreen}
          options={{
              tabBarButton: () => null,
              headerShown: false,
              tabBarStyle: { display: 'none' },
          }}
      />
        <Tab.Screen
          name="Settings"
          component={settingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/settings.png')} // change to the correct icon
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
          component={logOut}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
          <Tab.Screen
              name="addCommission"
              component={addCommissionScreen}
              options={{
                  tabBarButton: () => null,
                  headerShown: false,
                  tabBarStyle: { display: 'none' },
              }}
          />
        <Tab.Screen
          name="Login"
          component={loginScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="Sign Up"
          component={signUpScreen}
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
