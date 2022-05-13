import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// bring auth screen
import SignInScreen from './Screen/AuthScreen/SignInScreen';
import SignUpScreen from './Screen/AuthScreen/SignUpScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type AuthRootStack = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthRootStack>();

const StackAuthNavigation: FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackAuthNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
