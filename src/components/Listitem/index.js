import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
const Listitem = ({ title, subtitle, onPress}) => {

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle ? (
          <Text style={styles.subtitle}>{subtitle}</Text>
        ): null }
      </View>
      <Image style={styles.arrow} source={require('./../../assets/arrow.png')}/>
    </Pressable>
  )
}
export default React.memo(Listitem);