import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
const InputBox = ({ title, ispassword, placeholder, onChangeText, value}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  const onEyePress = () => {
    setisPasswordVisible(!isPasswordVisible);
  }
  return (
    <View style= {styles.container}>
      <Text style ={styles.title} >{title}</Text>
      <View style={styles.fillerbox}>
        <TextInput value={value} onChangeText={onChangeText} secureTextEntry={ispassword && !isPasswordVisible} style={styles.input} placeholder= {placeholder}/>
        {ispassword ? (
          <Pressable onPress={onEyePress}> 
          <Image style={styles.eye} source={ isPasswordVisible ? (require('../../assets/view.png')) : require('../../assets/hide.png')} />
          </Pressable>)
          : null
        }
        
      </View>
    </View>
  )
}
export default InputBox