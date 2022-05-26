import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface Props {
  item: any;
}

const RenderPost: FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      {/* body container */}
      <View style={styles.bodyContainer}>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

export default RenderPost;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  bodyContainer: {
    width: '95%',
    borderWidth: 1,
    alignItems: 'center',
  },
});
