import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {FC} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

const SignInScreen: FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View>
          <Text>SignInScreen</Text>
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
