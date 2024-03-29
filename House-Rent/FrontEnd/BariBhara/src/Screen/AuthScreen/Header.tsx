import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../../component/Color';
import ConstValue from '../../component/ConstValue';
// @ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../../component/Responsive';

//define globally of color value
const ColorValue = Color();

type Props = {
  navigation: any;
  Value: Number;
  title: String;
};

const Header: FC<Props> = ({navigation, Value, title}) => {
  //method to navigate to back previous screen
  const NavigateToBackMethod = () => navigation.goBack();
  return (
    <View style={styles.BodyView}>
      {/* if Back Button Exists */}
      {Value ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.BackButtonStyle}
            onPress={NavigateToBackMethod}>
            {/* <Text style={styles.BackArrow}>Back</Text> */}
            <AntDesign
              name="arrowleft"
              size={ResponsiveFontSize(25)}
              color={ColorValue.WHITE}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
      {/* if Back Button Exists */}
      {/* Header Title  */}
      <View>
        <Text numberOfLines={1} style={styles.Title}>
          {title}
        </Text>
      </View>
      {/* Null View Area */}
      <View>
        <Text>{'    '}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BodyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ColorValue.Header_background,
    paddingVertical: heightToDp(2),
  },
  Title: {
    fontSize: ResponsiveFontSize(18),
    fontWeight: '700',
    color: ColorValue.Tab_Background_Color,
  },
  BackArrow: {
    fontSize: ConstValue.regularFontSize,
    fontWeight: '500',
    color: ColorValue.Tab_Background_Color,
  },
  BackButtonStyle: {
    paddingHorizontal: widthToDp(3),
  },
});

export default Header;
