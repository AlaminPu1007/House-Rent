import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import UserArea from './UserArea';
import {heightToDp, ResponsiveFontSize} from '../../../component/Responsive';
import Color from '../../../component/Color';
import ImageComponent from './ImageComponent';
import PostDescription from './PostDescription';
import LikeComponent from './LikeComponent';

const ColorValue = Color();
interface Props {
  item: any;
}

const RenderPost: FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      {/* body container */}
      <View style={styles.bodyContainer}>
        {/* Render user avatar  */}
        <View style={styles.container}>
          <UserArea data={item} />
        </View>
        {/* Post description */}
        <View>
          <PostDescription description={item?.description} />
        </View>
        {/* render Image component goes here */}
        <View style={styles.container}>
          <ImageComponent {...item} />
        </View>
        {/* Like/comment component goes here */}
        <View style={styles.container}>
          <LikeComponent
            postId={item.id}
            totalLike={item.like}
            totalComment={item.totalComments}
            myLike={item?.my_like}
          />
        </View>
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
    alignItems: 'center',
    marginBottom: heightToDp(1.5),
    paddingVertical: heightToDp(1),
    borderWidth: 1,
    borderColor: ColorValue.DDD,
    borderRadius: ResponsiveFontSize(5),
  },
});
