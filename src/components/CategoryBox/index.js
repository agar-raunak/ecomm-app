import React, {useState} from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { colors } from '../../utils/colors';

import InputBox from '../InputBox';
const CategoryBox = ({ title, image, onPress, isFirst, isSelected}) => {
 
  return (
    <Pressable onPress={onPress} style={[styles.container,isFirst? {marginLeft:16}: {}]}>
      <View style={[styles.imagecontainer,isSelected ? {backgroundColor:colors.black}:{}]}>
        <Image source={image} style={styles.image}/>
      </View>
      <Text style={[styles.title, isSelected ? {color:colors.blue, fontWeight: '500'}: {}]}>{title}</Text>
    </Pressable>
  )
}
export default React.memo(CategoryBox);