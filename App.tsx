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
} from 'react-native';

import Signup from './src/screens/auth/Signup';
import AuthHeader from './src/components/AuthHeader';
import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';


function App(): JSX.Element {
  const [theme, settheme] = useState(true)

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  },[])
  const dosomething =() =>{
    console.log("hello")
  }
  return (
    <SafeAreaView>
      <Signin/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  themeheader: {margin:20, fontSize: 16, backgroundColor: 'yellow'}
})

export default App;
