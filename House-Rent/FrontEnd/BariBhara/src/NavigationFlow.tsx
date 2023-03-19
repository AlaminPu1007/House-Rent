import React, {useEffect} from 'react';
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

import {AutomaticSignIn} from './redux/authRedux/AuthActionMethod';
import HomeTabNavigation from './rootNavigation/dashboard/homeTab';
//for tab navigation
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// type for auth stack
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  forgetPassword: undefined;
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
