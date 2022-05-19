import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {LogOut} from '../../redux/authRedux/AuthActionMethod';

const HomeScreen = () => {
  // log out method
  const LogOutMethod = () => {
    return LogOut();
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={LogOutMethod}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
