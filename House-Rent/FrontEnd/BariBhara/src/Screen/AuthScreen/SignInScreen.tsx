import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

export type Props = {
  navigation: any;
};

const SignInScreen: FC<Props> = ({navigation}: Props) => {
  /**  Method to navigate signUP screen */
  const NavigateMethod = () => navigation.navigate('SignUp');

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View>
          <Text>SignInScreen</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={NavigateMethod}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  scrollViewStyle: {
    flexGrow: 1,
  },
});
