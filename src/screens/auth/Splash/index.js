import React from "react";
import { Text,Image,View, Pressable } from "react-native";
import Button from "../../../components/Button"; 
import { styles } from './styles';
const Splash = () => {
  return (
    <View style={styles.conatiner}>
      <Image resizeMode='contain' style = {styles.image} source={require('../../../assets/photo_main_screen.jpg')}/>
      <View style={styles.titlecontainer}>
        <Text style = {styles.title}> You'll find </Text>
        <Text style = {[styles.title,styles.innertitle]}>All you need</Text> 
        <Text style= {styles.title}>Here!</Text>
      </View>
      
      <Button title= "Signup"/>

      <Pressable hitSlop={20}>
        <Text style={styles.footertext}>Sign In</Text>
      </Pressable>
    </View>
    
  )
}

export default Splash