import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../NavigationFlow';
//bring fake json
import DummyData from '../../component/DummyData';
import Color from '../../component/Color';
import Header from '../AuthScreen/Header';
import {heightToDp} from '../../component/Responsive';
import {StorePostData} from '../../redux/dashboardRedux/DashboardActionMethod';
import {useAppSelector} from '../../redux/RootReducers';
import RenderPost from './homeComponent/RenderPost';

//define color function
const ColorValue = Color();
//define dummy data
const Data = DummyData();

//get screen props
type Props = BottomTabScreenProps<RootStackParamList, 'Setting'>;

const HomeScreen = ({navigation}: Props) => {
  // bring dashboard redux initial state
  const {post} = useAppSelector(state => state.dashboardReducer);

  /**
   * after first visit on this screen
   * dummy json will be stored inside our redux(global state)
   */
  useEffect(() => {
    StorePostData({data: Data});
  }, []);
  // --- flat list related hing goes here ---
  const renderMethod = ({item}: any) => {
    return <RenderPost item={item} />;
  };
  const keyExtractorMethod = (item: any) => item.id;

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      {/* Header Area */}
      <View>
        <Header navigation={navigation} title="Home" Value={0} />
      </View>
      <View style={styles.flatListView}>
        <FlatList
          data={post}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractorMethod}
          renderItem={renderMethod}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: ColorValue.StatusBar_Background,
  },
  ContentStyle: {
    flexGrow: 1,
  },
  BodyViewStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: heightToDp(1),
  },
  flatListView: {
    paddingVertical: heightToDp(1),
  },
});
