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
          <Text>{data.user?.name}</Text>
        </TouchableOpacity>
      </View>
      {/* post material menu option goes here */}
      <View style={styles.menuView}>
        <Text>...</Text>
      </View>
    </View>
  );
};

export default UserArea;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    borderWidth: 1,
  },
  imageView: {
    width: '15%',
    borderWidth: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: width * 0.11,
    height: width * 0.11,
  },
  userNameArea: {
    width: '80%',
  },
  menuView: {
    width: '5%',
    alignItems: 'center',
  },
});
