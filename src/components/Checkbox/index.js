import React from "react";
import { Pressable, Text, Touchable, TouchableOpacity, View, Image } from "react-native";
import { styles } from './styles';
const Checkbox = ({ checked, onCheck}) => {
  
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={()=>onCheck(!checked)} style = {styles.container}>
      {checked ? (
        <View style={styles.innercontainer}>
          <Image style={styles.checkicon} source={require('../../assets/check.png')}/>
        </View>
      ) : null }
    </TouchableOpacity>
  )
}
export default Checkbox