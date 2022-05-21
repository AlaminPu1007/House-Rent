import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../../component/Color';
//import Header Screen
import Header from './Header';
//import Responsive height, width & fontsize
import {
  ResponsiveFontSize,
  heightToDp,
  widthToDp,
} from '../../component/Responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../NavigationFlow';
import {VALID_EMAIL} from '../../component/RegexValue';
//Define All ColorValue into one variable
const ColorValue = Color();

//get props of auth root stack
type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const ForgetPasswordScreen = ({navigation}: Props) => {
  //Define State
  const [Mobile, setMobile] = useState<string>('');
  const [MobileFill, setMobileFill] = useState<boolean>(false);
  //Define State

  //useEffect function
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      navigation.addListener('blur', () => {
        ClearTextInput();
      });
    }
    return () => {
      unmounted = true;
    };
  }, []);

  /* Clear TextInput Field */
  const ClearTextInput = () => {
    return setMobile(''), setMobileFill(false);
  };
  /* Clear TextInput Field */

  //On Press Function
  //Email TextInput function
  const OnChangeMobile = (text: string) => {
    //check valid email
     const check_mail = VALID_EMAIL.test(text);

     if(check_mail && text.length > 0 )
     {
       setMobileFill(true);
     }else {
       setMobileFill(false);
     }
    setMobile(text);
  };

  //On Press Function
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={ColorValue.StatusBar_Background} />
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="Forget Password" Value={1} />
      </View>
      {/* Header Area */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        <View style={styles.BodyViewStyle}>
          {/* Login View */}
          <View style={styles.LoginView}>
            {/* Phone Number TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>
                Enter your mobile number
              </Text>
              {/* Mobile Number */}
              <View
                style={
                  (MobileFill !== false ? !MobileFill : null)
                    ? [styles.MobileNumber, styles.MobileTextInputStyleError]
                    : styles.MobileNumber
                }>
                {/* Email text input component */}
                <View style={styles.PhoneTextInputView}>
                  <TextInput
                    style={styles.MobileTextInputStyle}
                    placeholder="Enter you email"
                    underlineColorAndroid="transparent"
                    value={Mobile}
                    onChangeText={OnChangeMobile}
                    autoCorrect={false}
                    autoFocus={true}
                    blurOnSubmit={false}
                    returnKeyType="next"
                  />
                </View>
                {/* TextInput */}
              </View>
              {/* Mobile Number */}
            </View>
            {/* Phone Number TextInput Box */}

            {/* Login Button View */}
            <View style={styles.LoginButtonView}>
              {MobileFill ? (
                <TouchableOpacity
                  style={styles.LoginButton}
                  activeOpacity={0.5}>
                  <Text style={styles.LoginButtonText}>Search</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled={true}
                  style={styles.DeActiveLoginButton}
                  activeOpacity={0.5}>
                  <Text style={styles.LoginButtonText}>Search</Text>
                </TouchableOpacity>
              )}
            </View>
            {/* Login Button View */}
          </View>
          {/* Login View */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ForgetPasswordScreen;

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
    // paddingVertical: heightToDp(1),
  },
  BodyViewStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: heightToDp(15),
    paddingBottom: heightToDp(1),
  },
  LoginView: {
    width: '90%',
  },
  MobileNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ColorValue.Mobile_TextInput_Border,
    paddingVertical: heightToDp(1),
    borderRadius: ResponsiveFontSize(8),
  },
  PhoneTextStyle: {
    fontSize: ResponsiveFontSize(15),
    color: ColorValue.Mobile_TextInput_Text,
    paddingVertical: heightToDp(2),
  },
  FlagView: {
    width: '15%',
    alignItems: 'center',
  },
  CodeView: {
    width: '15%',
    alignItems: 'center',
  },
  CodeTextStyle: {
    color: ColorValue.Mobile_TextInput_Text,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  PhoneTextInputView: {
    width: '100%',
    marginLeft: widthToDp(1),
  },

  MobileTextInputStyle: {
    borderBottomColor: 'transparent',
    paddingVertical: 0,
    height: ResponsiveFontSize(30),
    color: ColorValue.Mobile_TextInput_Text,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  LoginButtonView: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: heightToDp(3),
  },
  LoginButton: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: ColorValue.Login_Button_Color,
    paddingVertical: heightToDp(1.5),
    borderColor: ColorValue.StatusBar_Background,
    borderRadius: ResponsiveFontSize(8),
  },
  LoginButtonText: {
    color: ColorValue.StatusBar_Background,
    fontSize: ResponsiveFontSize(16),
    fontWeight: '600',
  },

  MobileTextInputStyleError: {
    borderWidth: 1,
    borderColor: ColorValue.TextInput_Error_Border,
  },
  DeActiveLoginButton: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: ColorValue.DeActive_Login_Button_Color,
    paddingVertical: heightToDp(1.5),
    borderColor: ColorValue.StatusBar_Background,
    borderRadius: ResponsiveFontSize(8),
  },
});
