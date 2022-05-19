import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRootStack} from '../../NavigationFlow';
import ColorValue from '../../component/Color';
import {shallowEqual} from 'react-redux';
import {
  ResponsiveFontSize,
  heightToDp,
  widthToDp,
} from '../../component/Responsive';
import Header from './Header';
import ConstValue from '../../component/ConstValue';
import {SignInProcess} from '../../redux/authRedux/AuthActionMethod';
import {useAppSelector} from '../../redux/RootReducers';
import {VALID_EMAIL} from '../../component/RegexValue';

//get props of auth root stack
type Props = NativeStackScreenProps<AuthRootStack, 'SignUp'>;

const SignInScreen = ({navigation}: Props) => {
  //Root stack is came from our root reducer
  const {authError} = useAppSelector(state => state.authReducer, shallowEqual);
  // define use state here
  //for email text input
  const [emailTextInput, setEmailTextInput] = useState<string>('');
  // for password
  const [passwordTextInput, setPasswordTextInput] = useState<string>('');

  /**  Method to navigate signUP screen */
  const NavigateMethod = () => navigation.navigate('SignUp');
  // store email text input
  const EmailTextInputMethod = (text: string) => {
    setEmailTextInput(text);
  };
  // store password text input
  const PasswordTextInputMethod = (text: string) => {
    setPasswordTextInput(text);
  };
  //submit user sign in info into backend
  const LoginMethod = () => {
    const check_mail = VALID_EMAIL.test(emailTextInput);
    if (check_mail) {
      //api called method goes here
      SignInProcess({email: emailTextInput, password: passwordTextInput});
    } else {
      Alert.alert('please provide a valid email');
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={ColorValue.StatusBar_Background} />
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="SignIn" Value={0} />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        <View style={styles.BodyViewStyle}>
          {/* Login View */}
          <View style={styles.LoginView}>
            {/* Phone Number TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your email</Text>
              {/* Mobile Number */}
              <View style={styles.MobileNumber}>
                {/* TextInput component goes here */}
                <View style={styles.PhoneTextInputView}>
                  <TextInput
                    style={styles.MobileTextInputStyle}
                    placeholder="Enter your email"
                    underlineColorAndroid="transparent"
                    value={emailTextInput}
                    maxLength={30}
                    keyboardType="number-pad"
                    onChangeText={EmailTextInputMethod}
                    autoCorrect={false}
                    autoFocus={false}
                    blurOnSubmit={false}
                    returnKeyType="next"
                  />
                </View>
              </View>
            </View>
            {/* password TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your password</Text>
              <View style={styles.PasswordView}>
                <TextInput
                  placeholder="*******"
                  underlineColorAndroid="transparent"
                  style={styles.PasswordTextInputStyle}
                  secureTextEntry={true}
                  value={passwordTextInput}
                  onChangeText={PasswordTextInputMethod}
                  autoCorrect={false}
                  blurOnSubmit={false}
                  returnKeyType="done"
                />
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
                onPress={LoginMethod}
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
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.Mobile_TextInput_Text,
    paddingVertical: heightToDp(2),
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
});
