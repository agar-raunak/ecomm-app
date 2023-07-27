import React from "react";
import { Pressable, Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from './styles';
const Button = ({ title, onpress, style}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onpress} style = {[styles.container,style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
export default React.memo(Button);