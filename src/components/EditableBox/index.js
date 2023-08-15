import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import InputBox from "../InputBox";
const EditableBox = ({ label, value, onChangeText, editable, onPress}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input}/>
     
    </View>
  )
}
export default React.memo(EditableBox);