import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LikeComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Like Component</Text>
    </View>
  );
};

export default LikeComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
