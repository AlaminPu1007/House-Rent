import React, {FC, useEffect} from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
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
import {AutomaticSignIn} from './redux/authRedux/AuthActionMethod';

// type for auth stack
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

const AuthStack = createNativeStackNavigator<RootStackParamList>();

// Authentication stack navigation define here
const StackAuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignUp"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};
//type for dashboard home stack
// export type HomeRootStack = {
//   Home: undefined;
// };

const HomeStack = createNativeStackNavigator<RootStackParamList>();

//dashboard navigation flow
const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
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
        {!token ? <StackAuthNavigation /> : <HomeStackNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
