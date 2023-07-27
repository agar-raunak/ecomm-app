import React, { useState } from "react";
import { Text,Image,View, Pressable, InputAccessoryView } from "react-native";
import Button from "../../../components/Button"; 
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";
import InputBox from "../../../components/InputBox";
import Checkbox from "../../../components/Checkbox";
import Separator from "../../../components/Separator";
import Googlelogin from "../../../components/Googlelogin";
const Signup = () => {

  const [checked,setcheck] = useState(false);
  const onSignup = () => {
    console.log("Sign in was touched");
  }
  return (
    <View style={styles.conatiner}>
      <AuthHeader title="Sign up"/>
      <InputBox title="Name" placeholder="John Doe"/>
      <InputBox title="E-mail" placeholder="example@gmail.com"/>
      <InputBox title="Password" placeholder="**********" ispassword/>
      <View style={styles.agreeRow}> 
        <Checkbox checked={checked} onCheck={setcheck}/>
        <Text style={styles.agreeText}>I agree with Terms & conditions</Text>
      </View>
      <Button title="Sign up" style={styles.button}/>
      <Separator text="Or Sign up with"/>
      <Googlelogin/>
      <Text style={styles.footertext}>
        Already have an account?
        <Text onPress = {onSignup} style={styles.footerlink}>
          Sign In
        </Text>
      </Text>
        
    </View>
    
  )
}

export default Signup