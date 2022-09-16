import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
//@ts-ignore
import Octicons from 'react-native-vector-icons/Octicons';

import {
  heightToDp,
  ResponsiveFontSize,
  widthToDp,
} from '../../../component/Responsive';
import Color from '../../../component/Color';
import ConstValue from '../../../component/ConstValue';
const ColorValue = Color();
interface Props {
  postId: string;
  totalLike: string;
  totalComment: string;
}

const LikeComponent: FC<Props> = ({postId, totalLike, totalComment}) => {
  function someWorklet(greeting: string) {
    'worklet';
    console.log("Hey I'm running on the UI thread");
  }
  return (
    <View style={styles.container}>
      <View style={styles.likeCommentValue}>
        <Text style={styles.textStyle}>{totalLike} Likes</Text>
        <Text style={styles.textStyle}>{totalComment} Comments</Text>
      </View>
      <View style={styles.likeCommentValue}>
        <TouchableOpacity
          style={styles.likeButton}
          activeOpacity={0.5}
          onPress={() => {
            someWorklet('someWorklet');
          }}>
          <AntDesign
            name="like2"
            size={ResponsiveFontSize(30)}
            color={ColorValue.BLACK}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton} activeOpacity={0.5}>
          <Octicons
            name="comment"
            size={ResponsiveFontSize(27)}
            color={ColorValue.BLACK}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LikeComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.BLACK,
  },
  likeCommentValue: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: heightToDp(0.5),
  },
  likeButton: {
    alignItems: 'center',
    paddingHorizontal: widthToDp(5),
  },
});
