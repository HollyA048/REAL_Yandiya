import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InspectionScreen } from './screens/InspectionScreen';
import { LoginScreen } from './screens/LoginScreen';
import { LogOut } from './screens/LogoutScreen';
import { CommissionScreen } from './screens/CommissionScreen';
import { ProjectHub } from './screens/ProjectHub';
import { SignUpScreen } from './screens/SignUpScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { AddCommissionScreen } from './screens/AddCommissionScreen';
import { SignOff } from './screens/SignOffScreen';
import { JobInfoBox } from './screens/JobIntelScreen';
import { HelpScreen } from './screens/HelpScreen'
import { welcomeScreen } from './screens/WelcomeScreen';

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer initialRouteName ="Home">
      <Tab.Navigator
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
          name="Welcome"
          component={welcomeScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="login"
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
                    fontFamily: 'manrope',
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
          name="InspectionScreen"
          component={InspectionScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="CommissionScreen"
          component={CommissionScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
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
                  source={require('./assets/settings.png')}
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
                    fontFamily: 'manrope',
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
          name="AddCommission"
          component={AddCommissionScreen}
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
          name="SignUp"
          component={SignUpScreen}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="sign_off"
          component={SignOff}
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name="JobIntel"
          component={JobInfoBox}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
