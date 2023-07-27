import React, { useState } from "react";
import { Text,Image,View, Pressable, InputAccessoryView } from "react-native";
import Button from "../../../components/Button"; 
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";
import InputBox from "../../../components/InputBox";
import Checkbox from "../../../components/Checkbox";
import Separator from "../../../components/Separator";
import Googlelogin from "../../../components/Googlelogin";
const Signin = () => {

  const [checked,setcheck] = useState(false);
  const onSignIn = () => {
    console.log("Sign in was touched. Hola");
  }
  return (
    <View style={styles.conatiner}>
      <AuthHeader title="Sign In"/>
      <InputBox title="E-mail" placeholder="example@gmail.com"/>
      <InputBox title="Password" placeholder="**********" ispassword/>
      
      <Button title="Sign In" style={styles.button}/>
      <Separator text="Or Sign in with"/>
      <Googlelogin/>
      <Text style={styles.footertext}>
        Don't have an account?
        <Text onPress = {onSignIn} style={styles.footerlink}>
          Sign Up
        </Text>
      </Text>
        
    </View>
    
  )
}

export default React.memo(Signin);