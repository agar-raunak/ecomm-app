import React from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
const AuthHeader = ({ title, onBackpress}) => {
  
  return (
    <View style= {styles.container}>
      <Pressable onPress={onBackpress} hitSlop={15}>
        <Image style={styles.image} source={require('../../assets/back.png')} />
      </Pressable>
      <Text style={styles.title}> {title}</Text>
    </View>
  )
}
export default AuthHeader