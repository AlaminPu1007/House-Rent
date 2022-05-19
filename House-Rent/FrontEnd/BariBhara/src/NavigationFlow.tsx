import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// bring auth screen
import SignInScreen from './Screen/AuthScreen/SignInScreen';
import SignUpScreen from './Screen/AuthScreen/SignUpScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
///redux stuff
import {useAppSelector} from './redux/RootReducers';
import {shallowEqual} from 'react-redux';
//dashboard screen import here
import HomeScreen from './Screen/dashboard/HomeScreen';

// type for auth stack
export type AuthRootStack = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthRootStack>();

// Authentication stack navigation define here
const StackAuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};
//type for dashboard home stack
export type HomeRootStack = {
  Home: undefined;
};

const HomeStack = createNativeStackNavigator<HomeRootStack>();

//dashboard navigation flow
const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

/**
 *After login, flow define here
 *if user logged in successfully, they can
 *successfully access this navigation
 */

export default () => {
  // bring auth state here
  const {token} = useAppSelector(state => state.authReducer);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!token ? <StackAuthNavigation /> : <HomeStackNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
