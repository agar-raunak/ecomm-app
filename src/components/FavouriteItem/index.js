import React, {useState} from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import InputBox from '../InputBox';
const FavouriteItem = ({ title, image, onPress,price, icon}) => {
 
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image}/>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      
      <Image source={icon || require('../../assets/cross.png')} style={styles.icon}/>
      
      
    </Pressable>
  )
}
export default React.memo(FavouriteItem);