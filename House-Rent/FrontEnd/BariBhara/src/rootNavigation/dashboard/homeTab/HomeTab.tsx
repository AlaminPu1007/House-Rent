import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//for tab navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//bring all dashboard component
import HomeScreen from '../../../Screen/dashboard/HomeScreen';
import SettingScreen from '../../../Screen/dashboard/SettingScreen';
//bring all component to show, without tab-navigation
import PostPreview from '../../withoutTab/singleImagePreview';
// @ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import {ResponsiveFontSize} from '../../../component/Responsive';

// type for auth stack
export type RootTabParamList = {
  Home: undefined;
  Setting: undefined;
  Dashboard: undefined;
  postPreview: {postId: string} | undefined;
};

//define tab navigation
const Tab = createBottomTabNavigator<RootTabParamList>();

//dashboard navigation flow
const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        // tabBarIconStyle: {display: 'none'},

        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
          display: 'none',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
        name="Dashboard"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
        name="Setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

//define Stack with Tab,and without tab navigation
// to preview some task, such as view single image without tab nav
const Stack = createNativeStackNavigator<RootTabParamList>();
const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeTabNavigation} />
      <Stack.Screen name="postPreview" component={PostPreview} />
    </Stack.Navigator>
  );
};

export {StackNav};
