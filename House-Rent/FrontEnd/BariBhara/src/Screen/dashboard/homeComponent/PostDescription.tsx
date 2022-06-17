import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ConstValue from '../../../component/ConstValue';
import Color from '../../../component/Color';
import {heightToDp} from '../../../component/Responsive';

const ColorValue = Color();

const PostDescription = ({data}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.descriptionButton}>
        <Text numberOfLines={3} style={styles.descriptionText}>
          {data.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostDescription;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: heightToDp(0.5),
  },
  descriptionButton: {
    width: '100%',
  },
  descriptionText: {
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.BLACK,
  },
});
