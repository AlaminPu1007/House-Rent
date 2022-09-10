import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {ResponsiveFontSize, heightToDp} from '../../../component/Responsive';

//get device with
const {width, height} = Dimensions.get('window');

const ImagesComponent = (props: any) => {
  //destruct images from props
  const {Images} = props;
  return (
    <View style={styles.container}>
      {Images?.map((item: any) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={item.id}
          //   onPress={navigateToImagePreview}
          style={styles.imageContainer}>
          <Image source={item.image1} style={styles.imageStyle} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ImagesComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: height * 0.7,
    borderWidth: 1,
    borderRadius: ResponsiveFontSize(5),
  },
  imageContainer: {
    paddingVertical: heightToDp(1),
  },
});
