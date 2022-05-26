import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import UserArea from './UserArea';
import {heightToDp, ResponsiveFontSize} from '../../../component/Responsive';
import Color from '../../../component/Color';

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
        <View style={styles.userAreaView}>
          <UserArea data={item} />
        </View>
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
    alignItems: 'center',
    marginBottom: heightToDp(1.5),
    paddingVertical: heightToDp(1),
    borderWidth: 1,
    borderColor: ColorValue.DDD,
    borderRadius: ResponsiveFontSize(5),
  },
  userAreaView: {
    width: '100%',
    alignItems: 'center',
  },
});
