import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {heightToDp, ResponsiveFontSize} from '../../../component/Responsive';

//get device with
const {width, height} = Dimensions.get('window');

const ImageComponent = ({data}: any) => {
  return (
    <View style={styles.container}>
      {/* Image will be render here */}
      <View style={styles.imageMapView}>
        {data?.images.map((item: any) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.id}
              style={styles.imageContainer}>
              <Image source={item.image1} style={styles.imageStyle} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  imageMapView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  imageContainer: {
    paddingVertical: heightToDp(0.5),
  },
  imageStyle: {
    resizeMode: 'cover',
    width: width * 0.45,
    height: width * 0.45,
    borderWidth: 1,
    borderRadius: ResponsiveFontSize(5),
  },
});
