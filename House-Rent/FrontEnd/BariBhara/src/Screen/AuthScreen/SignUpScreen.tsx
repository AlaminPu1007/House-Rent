import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../NavigationFlow';
import Color from '../../component/Color';
import {
  ResponsiveFontSize,
  widthToDp,
  heightToDp,
} from '../../component/Responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';
import ConstValue from '../../component/ConstValue';

// define globally of color
const ColorValue = Color();

//get props of auth root stack
type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignUpScreen = ({navigation}: Props) => {
  //navigate back to sign in screen
  const NavigateLoginMethod = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={ColorValue.StatusBar_Background} />
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="Sign Up" Value={1} />
      </View>
      {/* Header Area */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        <View style={styles.BodyViewStyle}>
          {/* Login View */}
          <View style={styles.LoginView}>
            {/* password TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your name</Text>
              <View style={styles.NameView}>
                <TextInput
                  placeholder="Your name"
                  underlineColorAndroid="transparent"
                  style={styles.PasswordTextInputStyle}
                  // value={name}
                  // onChangeText={OnChangeName}
                  autoCorrect={false}
                  autoFocus={true}
                  blurOnSubmit={false}
                  // onSubmitEditing={() => {
                  //   firstTextInput.focus();
                  // }}
                  returnKeyType="next"
                />
              </View>

              {/* Name Validation Error */}
            </View>
            {/* password TextInput Box */}

            {/* password TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your password</Text>
              <View style={styles.PasswordView}>
                <TextInput
                  placeholder="*******"
                  underlineColorAndroid="transparent"
                  style={styles.PasswordTextInputStyle}
                  // secureTextEntry={passwordVisible}
                  // value={password}
                  // ref={input => {
                  //   secondTextInput = input;
                  // }}
                  // onChangeText={OnChangePassword}
                  autoCorrect={false}
                  blurOnSubmit={false}
                  returnKeyType="done"
                />
              </View>
            </View>
            {/* Phone Number TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your email</Text>
              {/* Mobile Number */}
              <View style={styles.MobileNumber}>
                {/* TextInput Component goes here*/}
                <View style={styles.PhoneTextInputView}>
                  <TextInput
                    // ref={input => {
                    //   firstTextInput = input;
                    // }}
                    style={styles.MobileTextInputStyle}
                    placeholder="Enter your email"
                    underlineColorAndroid="transparent"
                    // onSubmitEditing={() => {
                    //   secondTextInput.focus();
                    // }}
                    // value={Mobile}

                    maxLength={30}
                    keyboardType="number-pad"
                    // onChangeText={OnChangeMobile}
                    autoCorrect={false}
                    blurOnSubmit={false}
                    returnKeyType="next"
                  />
                </View>
              </View>
            </View>

            {/* Login Button View */}
            <View style={styles.LoginButtonView}>
              <TouchableOpacity
                style={styles.DeActiveLoginButton}
                activeOpacity={0.5}>
                <Text style={styles.LoginButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Navigation to Register Page */}
          <View style={styles.RegisterUserView}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={NavigateLoginMethod}
              style={styles.LinkButtonStyle}>
              <Text style={styles.ForgetPasswordText}>
                Have not any account?
              </Text>
              <Text style={styles.LinkTextStyle}> Login</Text>
            </TouchableOpacity>
          </View>
          {/* Navigation to Register Page */}
          {/* Login View */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    paddingTop: heightToDp(6),
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
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.Mobile_TextInput_Text,
    paddingVertical: heightToDp(2),
    fontWeight: 'bold',
  },
  PhoneTextInputView: {
    width: '100%',
  },

  MobileTextInputStyle: {
    borderBottomColor: 'transparent',
    paddingVertical: 0,
    height: ResponsiveFontSize(30),
    color: ColorValue.Mobile_TextInput_Text,
    fontSize: ConstValue.regularFontSize,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginLeft: widthToDp(1),
  },
  NameView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ColorValue.Mobile_TextInput_Border,
    paddingVertical: heightToDp(1),
    borderRadius: ResponsiveFontSize(8),
  },
  PasswordView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ColorValue.Mobile_TextInput_Border,
    paddingVertical: heightToDp(1),
    borderRadius: ResponsiveFontSize(8),
  },
  PasswordTextInputStyle: {
    borderBottomColor: 'transparent',
    paddingVertical: 0,
    height: ResponsiveFontSize(30),
    color: ColorValue.Mobile_TextInput_Text,
    fontSize: ConstValue.regularFontSize,
    fontWeight: '700',
    letterSpacing: 0.5,
    width: '85%',
    marginLeft: widthToDp(1),
  },

  LoginButtonView: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: heightToDp(3),
  },

  LoginButtonText: {
    color: ColorValue.StatusBar_Background,
    fontSize: ResponsiveFontSize(16),
    fontWeight: '600',
  },

  ForgetPasswordText: {
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.Login_Header_Title,
  },
  RegisterUserView: {
    width: '90%',
    alignItems: 'center',
  },

  DeActiveLoginButton: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: ColorValue.Login_Button_Color,
    paddingVertical: heightToDp(1.5),
    borderColor: ColorValue.StatusBar_Background,
    borderRadius: ResponsiveFontSize(8),
  },
  LinkButtonStyle: {
    flexDirection: 'row',
  },
  LinkTextStyle: {
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.Login_Header_Title,
    fontWeight: '700',
  },
});
