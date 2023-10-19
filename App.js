import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/homeScreen';
import { InspectionScreen } from './screens/InspectionScreen';
import { LoginScreen } from './screens/LoginScreen';
import { LogOut } from './screens/LogoutScreen';
import { CommissionScreen } from './screens/CommissionScreen';
import { ProjectHub } from './screens/ProjectHub';
import { SignUpScreen } from './screens/SignUpScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { AddCommissionScreen } from './screens/AddCommissionScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
