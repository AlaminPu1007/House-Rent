import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
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

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="Home" Value={0} />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        <View style={styles.BodyViewStyle}>
          <Text>Home Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: ColorValue.StatusBar_Background,
  },
  HeaderView: {
    // paddingBottom: heightToDp(8),
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
});
