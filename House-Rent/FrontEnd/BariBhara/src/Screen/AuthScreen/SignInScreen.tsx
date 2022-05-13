import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRootStack} from '../../NavigationFlow';
import ColorValue from '../../component/Color';
import {
  ResponsiveFontSize,
  heightToDp,
  widthToDp,
} from '../../component/Responsive';
import Header from './Header';

//get props of auth root stack
type Props = NativeStackScreenProps<AuthRootStack, 'SignUp'>;

const SignInScreen = ({navigation}: Props) => {
  /**  Method to navigate signUP screen */
  const NavigateMethod = () => navigation.navigate('SignUp');

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={ColorValue.StatusBar_Background} />
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="SignIn" Value={0} />
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
              <View style={styles.MobileNumber}>
                {/* flag View */}
                <View style={styles.FlagView}>
                  <View style={styles.FlagStyle}>
                    <View style={styles.FlagRound} />
                  </View>
                </View>

                {/* flag View */}
                <View style={styles.VerticalBorderStyle} />

                {/* Mobile Code View */}
                <View style={styles.CodeView}>
                  <Text style={styles.CodeTextStyle}>+880</Text>
                </View>
                {/* Mobile Code View */}
                {/* TextInput */}
                <View style={styles.PhoneTextInputView}>
                  <TextInput
                    style={styles.MobileTextInputStyle}
                    placeholder="1XXXXXXXXX"
                    underlineColorAndroid="transparent"
                    // onSubmitEditing={() => {
                    //   firstTextInput.focus();
                    // }}
                    // value={Mobile}
                    maxLength={11}
                    keyboardType="number-pad"
                    // onChangeText={OnChangeMobile}
                    autoCorrect={false}
                    autoFocus={true}
                    blurOnSubmit={false}
                    returnKeyType="next"
                  />
                </View>
                {/* TextInput */}
              </View>
            </View>
            {/* Phone Number TextInput Box */}
            {/* password TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your password</Text>
              <View style={styles.PasswordView}>
                <TextInput
                  placeholder="*******"
                  // ref={input => {
                  //   firstTextInput = input;
                  // }}
                  underlineColorAndroid="transparent"
                  style={styles.PasswordTextInputStyle}
                  // secureTextEntry={passwordVisible}
                  // value={password}
                  // onChangeText={OnChangePassword}
                  autoCorrect={false}
                  blurOnSubmit={false}
                  returnKeyType="done"
                />
                {/* <View style={styles.passwordEyeIcon}>
                  {passwordVisible ? (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={SecurePasswordFunction}>
                      <Feather
                        name="eye-off"
                        size={ResponsiveFontSize(20)}
                        color={ColorValue.Location_Arrow_Icon}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={SecurePasswordFunction}>
                      <Feather
                        name="eye"
                        size={ResponsiveFontSize(20)}
                        color={ColorValue.Location_Arrow_Icon}
                      />
                    </TouchableOpacity>
                  )}
                </View> */}
              </View>
            </View>
            {/* password TextInput Box */}

            {/* Forget Password */}
            <View style={styles.ForgetPasswordView}>
              <TouchableOpacity activeOpacity={0.5}>
                <Text
                  style={[styles.ForgetPasswordText, styles.forgetTextBold]}>
                  Forget password ?
                </Text>
              </TouchableOpacity>
            </View>
            {/* Forget Password */}

            {/* Login Button View */}
            <View style={styles.LoginButtonView}>
              <TouchableOpacity
                style={styles.LoginButton}
                // onPress={LoginUserFunction}
                activeOpacity={0.5}>
                <Text style={styles.LoginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Navigation to Register Page */}
          <View style={styles.RegisterUserView}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={NavigateMethod}
              style={styles.LinkButtonStyle}>
              <Text style={styles.ForgetPasswordText}>
                Have not any account?
              </Text>
              <Text style={styles.LinkTextStyle}> SignUp</Text>
            </TouchableOpacity>
          </View>
          {/* Navigation to Register Page */}
          {/* Login View */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
    paddingTop: heightToDp(8),
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
    width: '65%',
  },
  FlagStyle: {
    width: ResponsiveFontSize(30),
    height: ResponsiveFontSize(18),
    backgroundColor: '#006a4e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlagRound: {
    width: ResponsiveFontSize(12),
    height: ResponsiveFontSize(12),
    backgroundColor: '#f42a41',
    borderRadius: ResponsiveFontSize(100),
  },
  VerticalBorderStyle: {
    height: '80%',
    borderWidth: 1,
    borderColor: ColorValue.Mobile_TextInput_Border,
    marginHorizontal: ResponsiveFontSize(8),
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
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    letterSpacing: 0.5,
    width: '85%',
    marginLeft: ResponsiveFontSize(10),
  },
  passwordEyeIcon: {
    width: '12%',
    alignItems: 'center',
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
  ForgetPasswordView: {
    paddingTop: heightToDp(2),
  },
  ForgetPasswordText: {
    fontSize: ResponsiveFontSize(14),
    color: ColorValue.Login_Header_Title,
  },
  forgetTextBold: {
    fontWeight: '700',
  },
  RegisterUserView: {
    width: '90%',
    alignItems: 'center',
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
  LinkButtonStyle: {
    flexDirection: 'row',
  },
  LinkTextStyle: {
    fontSize: ResponsiveFontSize(14),
    color: ColorValue.Login_Header_Title,
    fontWeight: '700',
  },
  ErrorView: {
    paddingTop: heightToDp(1),
    width: '100%',
    // flexWrap: 'wrap',
    marginLeft: widthToDp(2),
  },
  ServerIssueView: {
    paddingBottom: heightToDp(1),
    width: '100%',
    // flexWrap: 'wrap',
    marginLeft: widthToDp(2),
  },
  ErrorText: {
    fontSize: ResponsiveFontSize(14),
    color: ColorValue.TextInput_Error_Border,
  },
});
