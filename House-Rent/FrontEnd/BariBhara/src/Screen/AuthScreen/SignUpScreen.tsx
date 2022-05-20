import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
import {VALID_EMAIL} from '../../component/RegexValue';
import {SignUpProcess} from '../../redux/authRedux/AuthActionMethod';
import {useAppSelector} from '../../redux/RootReducers';
import {shallowEqual} from 'react-redux';

// define globally of color
const ColorValue = Color();

//get props of auth root stack
type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignUpScreen = ({navigation}: Props) => {
  //Root stack is came from our root reducer
  const {signIn_loader, authError} = useAppSelector(
    state => state.authReducer,
    shallowEqual,
  );

  //define use state here
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  //navigate back to sign in screen
  const NavigateLoginMethod = () => navigation.goBack();
  // name text input store here
  const nameTextInputMethod = (text: string) => {
    setName(text);
  };
  // email text input store here
  const emailTextInputMethod = (text: string) => {
    setEmail(text);
  };
  // password text input store here
  const passwordTextInputMethod = (text: string) => {
    setPassword(text);
  };

  //sign up method goes here
  const signUpMethod = () => {
    const check_mail = VALID_EMAIL.test(email);

    if (password && name && email) {
      if (check_mail) {
        //api called method goes here
        SignUpProcess({name, email, password});
      } else {
        Alert.alert('please provide a valid email');
      }
    } else {
      Alert.alert('field should not be empty');
    }
  };

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
                  value={name}
                  onChangeText={nameTextInputMethod}
                  autoCorrect={false}
                  autoFocus={true}
                  blurOnSubmit={false}
                  returnKeyType="next"
                />
              </View>

              {/* Name Validation Error */}
            </View>
            {/* email TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your email</Text>
              {/* Mobile Number */}
              <View style={styles.MobileNumber}>
                {/* TextInput Component goes here*/}
                <View style={styles.PhoneTextInputView}>
                  <TextInput
                    style={styles.MobileTextInputStyle}
                    placeholder="Enter your email"
                    underlineColorAndroid="transparent"
                    maxLength={30}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={emailTextInputMethod}
                    autoCorrect={false}
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
                  value={password}
                  onChangeText={passwordTextInputMethod}
                  autoCorrect={false}
                  blurOnSubmit={false}
                  returnKeyType="done"
                  secureTextEntry={true}
                />
              </View>
            </View>

            {/* Error component goes here */}
            {authError ? (
              <View style={styles.errorView}>
                <Text style={styles.errorTextStyle}>{authError}</Text>
              </View>
            ) : null}

            {/* Login Button View */}
            <View style={styles.LoginButtonView}>
              <TouchableOpacity
                style={styles.DeActiveLoginButton}
                onPress={signUpMethod}
                activeOpacity={0.5}>
                {signIn_loader ? (
                  <ActivityIndicator size={'small'} color={ColorValue.WHITE} />
                ) : (
                  <Text style={styles.LoginButtonText}>Sign Up</Text>
                )}
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
  errorView: {
    paddingTop: heightToDp(1),
  },
  errorTextStyle: {
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.RED,
  },
});
