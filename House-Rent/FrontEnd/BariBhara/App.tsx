import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const settingScreen = () => {
    navigation.navigate('Setting');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="go to setting" onPress={settingScreen} />
    </View>
  );
};
const ScreenScreen: React.FC<Props> = ({navigation}) => {
  const settingScreen = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Setting Screen</Text>
      <Button title="go to home" onPress={settingScreen} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={ScreenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
