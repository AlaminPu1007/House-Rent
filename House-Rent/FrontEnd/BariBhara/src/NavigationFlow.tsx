import React, {FC, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// bring auth screen
import SignInScreen from './Screen/AuthScreen/SignInScreen';
import ForgetPasswordScreen from './Screen/AuthScreen/ForgetPasswordScreen';
import SignUpScreen from './Screen/AuthScreen/SignUpScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
///redux stuff
import {useAppSelector} from './redux/RootReducers';
import {shallowEqual} from 'react-redux';
//dashboard screen import here
import HomeScreen from './Screen/dashboard/HomeScreen';
import SettingScreen from './Screen/dashboard/SettingScreen';
import {AutomaticSignIn} from './redux/authRedux/AuthActionMethod';
//for tab navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// type for auth stack
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  forgetPassword: undefined;
  Setting: undefined;
};

const AuthStack = createNativeStackNavigator<RootStackParamList>();

// Authentication stack navigation define here
const StackAuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen
        name="forgetPassword"
        component={ForgetPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

//define tab navigation
const Tab = createBottomTabNavigator<RootStackParamList>();

//dashboard navigation flow
const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},

        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

/**
 *After login, flow define here
 *if user logged in successfully, they can
 *successfully access this navigation
 */

// const navigationRef = createNavigationContainerRef<RootStackParamList>();

export default () => {
  // bring auth state here
  const {token} = useAppSelector(state => state.authReducer, shallowEqual);
  useEffect(() => {
    //automatic sign in called to check user is already
    //logged in or not
    AutomaticSignIn();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {token ? <StackAuthNavigation /> : <HomeTabNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
