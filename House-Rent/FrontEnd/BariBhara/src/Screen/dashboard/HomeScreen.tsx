import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../NavigationFlow';

//get screen props
type Props = BottomTabScreenProps<RootStackParamList, 'Setting'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
