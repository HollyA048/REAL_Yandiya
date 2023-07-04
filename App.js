
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { welcomeScreen } from './screens/welcomeScreen.js';
import { loginScreen } from './screens/logInScreen';
import { SignUpScreen } from './screens/signUpScreen';
import { homeScreen } from './screens/homeScreen';
import { logOut } from './screens/logoutScreen';
import { projectHub } from './screens/projectHub';
import { addCommission } from './screens/addCommissionScreen';
import { clients } from './screens/clientsScreen';
import { settings } from './screens/settingsScreen';
import { infoScreen } from './screens/infoScreen';
import { mainMenuCom } from './screens/homeCommissionScreen';
import { preSiteVisitSurvey } from './screens/visitScreen';
import { preCom } from './screens/preComScreen';
import { inspectionScreen } from './screens/inspectionScreen';
import { sendOffForm } from './screens/sendOffScreen';


const Stack = createStackNavigator();

//   <Checkbox style={styles.checkbox} value={checked} onValueChange={setChecked} />

export const Change = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Login"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Welcome"
          component={welcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={loginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign up"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={homeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Log Out"
          component={logOut}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Project Hub"
          component={projectHub}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add Commission"
          component={addCommission}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Clients"
          component={clients}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Information"
          component={infoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Commission Screen"
          component={mainMenuCom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pre-Site Survey"
          component={preSiteVisitSurvey}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Commission Checklist"
          component={preCom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inspection"
          component={inspectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Send Off Form"
          component={sendOffForm}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Change;
