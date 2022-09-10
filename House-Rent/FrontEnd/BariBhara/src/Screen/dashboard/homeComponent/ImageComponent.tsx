import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import {heightToDp, ResponsiveFontSize} from '../../../component/Responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList} from '../../../rootNavigation/dashboard/homeTab/HomeTab';

import {useNavigation} from '@react-navigation/native';
//get device with
const {width} = Dimensions.get('window');

//get props of Tab-Navigation stuff
type Props = NativeStackScreenProps<RootTabParamList, 'postPreview'>;

const ImageComponent: FC<Props> = (props: any) => {
  //destruct property from props
  const {images, id} = props;

  //define use Navigation
  const navigation: any = useNavigation<Props>();
  //navigate to single preview component of an specific image
  const navigateToImagePreview = () =>
    navigation.navigate('postPreview', {postId: id});

  return (
    <View style={styles.container}>
      {/* Image will be render here */}
      <View style={styles.imageMapView}>
        {images.map((item: any) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.id}
              onPress={navigateToImagePreview}
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
