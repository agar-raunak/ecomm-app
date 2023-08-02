import React, {useState} from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import InputBox from '../InputBox';
const ProductHomeItem = ({ title, image, onPress,price}) => {
 
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  )
}
export default React.memo(ProductHomeItem);