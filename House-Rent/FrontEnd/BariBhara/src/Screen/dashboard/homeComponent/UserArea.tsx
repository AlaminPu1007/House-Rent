import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PostTime from '../../../component/PostTime';
import Color from '../../../component/Color';
import ConstValue from '../../../component/ConstValue';
import {heightToDp, ResponsiveFontSize} from '../../../component/Responsive';
//@ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';

const ColorValue = Color();

// get ios device
const IosDevice = Platform.OS === 'ios';
const {width} = Dimensions.get('window');

const UserArea = ({data}: any) => {
  return (
    <View style={styles.container}>
      {/* Render user avatar */}
      <View style={styles.imageView}>
        <Image style={styles.imageStyle} source={data?.user?.avatar} />
      </View>
      {/* User name with post time view */}
      <View style={styles.userNameArea}>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.nameTextStyle}>{data.user?.name}</Text>
        </TouchableOpacity>
        {/* post time view */}
        <View>
          <PostTime date={data.postData} />
        </View>
      </View>
      {/* post material menu option goes here */}
      <TouchableOpacity activeOpacity={0.5} style={styles.menuView}>
        <Entypo
          name="dots-three-vertical"
          size={ResponsiveFontSize(20)}
          color={ColorValue.Black}
          style={styles.menuStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserArea;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: IosDevice ? heightToDp(0.5) : heightToDp(0.8),
  },
  imageView: {
    width: '15%',
    alignItems: 'center',
  },
  imageStyle: {
    width: width * 0.1,
    height: width * 0.1,
    borderWidth: 1,
    borderColor: ColorValue.DDD,
    borderRadius: ResponsiveFontSize(100),
  },
  userNameArea: {
    width: '75%',
  },
  nameTextStyle: {
    color: ColorValue.BLACK,
    fontSize: ConstValue.regularFontSize + 1,
  },
  menuView: {
    width: '10%',
    alignItems: 'center',
  },
  menuStyle: {
    paddingVertical: 5,
  },
});
