//This component will help us to preview all image on specific post
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
//bring root dummy json data
import DummyData from '../../../component/DummyData';
import Header from '../../../Screen/AuthScreen/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../../../component/Color';
import {heightToDp} from '../../../component/Responsive';

//define color function
const ColorValue = Color();

const ImagePreview = ({navigation, route}: any) => {
  //destruct post-id from route
  const {postId = null} = route.params;
  //define use-state
  const [storePostData, setStorePostData] = useState<any>([]);

  useEffect(() => {
    let unmount = false;

    if (!unmount) {
      //get post id wise all image list
      getImageList();
    }
    return () => {
      unmount = true;
    };
  }, [route]);

  const getImageList = () => {
    //define data
    const data = DummyData();
    const findPost = data?.length
      ? data.find(i => i.id === parseInt(postId))
      : [];
    //store this inside our state
    setStorePostData(findPost);
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      {/* Header Area */}
      <View>
        <Header
          navigation={navigation}
          title={storePostData?.title || 'Image-Preview'}
          Value={0}
        />
      </View>
      <View style={styles.flatListView}>
        <Text>Single image Preview {postId}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: ColorValue.StatusBar_Background,
  },
  flatListView: {
    paddingVertical: heightToDp(1),
    flex: 1,
  },
});
