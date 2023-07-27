import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
const Separator = ({ text, onPress, style}) => {

  return (
    <View style={styles.container}>
      <View style={styles.line}/>
        <Text style={styles.text}>{text}</Text>
      <View style={styles.line}/>
    </View>
  )
}
export default Separator