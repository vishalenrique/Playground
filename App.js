/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  Button,
  // SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.myBackground,
      }}
      edges={['top', 'left', 'right', 'bottom']}
      mode={'padding'}>
      <Text style={{fontSize: 30, color: colors.text}}>Home Screen</Text>

      <Button
        title={'Nvaigate to Settings screen'}
        onPress={() => navigation.navigate('Settings')}
      />
    </SafeAreaView>
  );
}

const SafeView = ({children, ...rest}) => {
  return <View {...rest}>{children}</View>;
};

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={'Home'} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const SettingsScreen = ({navigation, route}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Settings Screen</Text>
    </SafeAreaView>
  );
};

const myLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    myPrimary: '#4A9777',
    textOnPrimary: '#FAFCFB',
    myBackground: '#FAFCFB',
  },
};

const myDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

const colorPalette1 = [
  '#FAFCFB',
  '#86CDB2',
  '#4A9777',
  '#1B693D',
  '#A6BAB2',
  '#906E58',
];

const App: () => Node = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === 'dark' ? myDarkTheme : myLightTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: myLightTheme.colors.myBackground},
            headerTintColor: myLightTheme.colors.myPrimary,
            headerTitleStyle: {
              fontWeight: 'bold',
              // fontSize: 22,
              // fontFamily:'Baskerville',
              // fontFamily:'Cochin',
            },
            // header: () => {
            //   const insets = useSafeAreaInsets();
            //   console.log({insets});
            //   return (
            //     <View
            //       style={{
            //         paddingTop: insets.top,
            //         //  paddingBottom: insets.bottom,
            //         paddingLeft: insets.left,
            //         paddingRight: insets.right,
            //         // borderWidth: 1,
            //         alignItems: 'center',
            //       }}>
            //       <Text
            //         style={{
            //           // borderWidth: 1,
            //           color: myLightTheme.colors.myPrimary,
            //           fontWeight: 'bold',
            //           fontSize: 26,
            //           // fontStyle:'italic',
            //           // fontFamily:'Baskerville',
            //           // fontFamily:'Cochin',
            //           // fontFamily:'San Francisco',
            //         }}>
            //         Home
            //       </Text>
            //     </View>
            //   );
            // },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Groceries',}}/>
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
