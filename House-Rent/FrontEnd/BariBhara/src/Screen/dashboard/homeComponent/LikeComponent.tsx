import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {LikeOnSpecifPost} from '../../../redux/dashboardRedux/DashboardActionMethod';
const ColorValue = Color();
interface Props {
  postId: string;
  totalLike: string;
  totalComment: string;
  myLike: boolean;
}

const LikeComponent: FC<Props> = ({
  postId,
  totalLike,
  totalComment,
  myLike,
}) => {
  //Like method goes here
  const LikeMethod = () => {
    if (!myLike) LikeOnSpecifPost({postId, myLike: !myLike});
  };

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
          onPress={LikeMethod}>
          <AntDesign
            name="like2"
            size={ResponsiveFontSize(30)}
            color={myLike ? ColorValue.Home_Tab_Color : ColorValue.BLACK}
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
