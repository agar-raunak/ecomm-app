/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
const GOOGLE_WEB_CLIENT_ID = '848307073972-o84h9mbo6vjtfluef86tatfaumljibqb.apps.googleusercontent.com';
import Config from "react-native-config";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from "./src/utils/colors";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './src/screens/auth/Signup';
import AuthHeader from './src/components/AuthHeader';
import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';
import Home from './src/screens/app/Home';
import Favourite from './src/screens/app/Favourite';
import Profile from './src/screens/app/Profile';
import CreateListing from './src/screens/app/CreateListing';


import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import ProductDetails from './src/components/ProductDetails';
import Settings from './src/screens/app/Settings';
import MyListings from './src/screens/app/MyListings';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options= {{headerShown:false}}/>
      <Stack.Screen name="Settings" component={Settings} options= {{headerShown:false}}/>
      <Stack.Screen name="CreateListing" component={CreateListing} options= {{headerShown:false}}/>
      <Stack.Screen name="MyListings" component={MyListings} options= {{headerShown:false}}/>

    </Stack.Navigator>
  )
}
const Tabs = () => (
  <Tab.Navigator 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let icon;

      if (route.name === 'Home') {
        icon = focused
          ? require('./src/assets/Tabs/home_active.png')
          : require('./src/assets/Tabs/home.png');
      } else if (route.name === 'Favourite') {
        icon = focused ? require('./src/assets/Tabs/favourite_active.png') : require('./src/assets/Tabs/favourite.png');
      } else if (route.name === 'ProfileStack') {
        icon = focused ? require('./src/assets/Tabs/user_active.png') : require('./src/assets/Tabs/user.png');
      }


      // You can return any component that you like here!
      return <Image style={{width:24,height:24}} source={icon} />;
    },
    tabBarShowLabel:false,
    tabBarStyle: {borderTopColor:colors.grey}
  })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favourite" component={Favourite} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
)

const mytheme = {
  colors: {
    background: colors.white,
  }
};

function App(): JSX.Element {

  const isSignedIn = true;
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  },[])
  
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={mytheme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options= {{headerShown:false}}/>
              <Stack.Screen name="ProductDetails" component={ProductDetails} options= {{headerShown:false}}/>

            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options= {{headerShown: false}}/>
              <Stack.Screen name="Signup" component={Signup} options= {{headerShown: false}}/>
              <Stack.Screen name="Signin" component={Signin} options= {{headerShown: false}}/>
            </>
          )}
        </Stack.Navigator>  
      </NavigationContainer>  
    </SafeAreaProvider>
  
  );
}


export default App;
