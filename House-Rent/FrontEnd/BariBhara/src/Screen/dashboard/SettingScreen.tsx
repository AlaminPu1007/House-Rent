import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LogOut} from '../../redux/authRedux/AuthActionMethod';

const SettingScreen = () => {
  // log out method
  const LogOutMethod = () => {
    return LogOut();
  };
  return (
    <View>
      <Text>Setting screen</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={LogOutMethod}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
