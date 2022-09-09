import React from 'react';

//for tab navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../Screen/dashboard/HomeScreen';
import SettingScreen from '../../../Screen/dashboard/SettingScreen';

// type for auth stack
export type RootTabParamList = {
  Home: undefined;
  Setting: undefined;
};

//define tab navigation
const Tab = createBottomTabNavigator<RootTabParamList>();

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

export {HomeTabNavigation};
