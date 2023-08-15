import React, { useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { styles } from './styles';
const InputBox = ({ title, type, options,ispassword, placeholder, onChangeText, style, value, ...props}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [isPickerModalVisible, setPickerModalVisible] = useState(false);
  const onEyePress = () => {
    setisPasswordVisible(!isPasswordVisible);
  }

  const onSelect = (opt) => {
    onChangeText(opt);
    setPickerModalVisible(false);
  }
  return (
    <View style= {styles.container}>
      <Text style ={styles.title} >{title}</Text>
      
      {type === 'picker' ? (
        <Pressable onPress= {()=>setPickerModalVisible(true)} style={styles.fillerbox}>
          {value ? (
            <Text style={[styles.input,style]} {...props}>{value?.title}</Text>

          ): (
            <Text style={[styles.placeholder,style]} {...props}>{placeholder}</Text>
          )}
          <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
      
        </Pressable>
      ):(
        <View style={styles.fillerbox}>
          <TextInput value={value} onChangeText={onChangeText} secureTextEntry={ispassword && !isPasswordVisible} style={[styles.input,style]} placeholder={placeholder} {...props}/>
          {ispassword ? (
            <Pressable onPress={onEyePress}> 
            <Image style={styles.eye} source={ isPasswordVisible ? (require('../../assets/view.png')) : require('../../assets/hide.png')} />
            </Pressable>)
            : null
          }
        </View>
      )}
        
      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity activeOpacity={1} onPress={()=> setPickerModalVisible(false)} style={styles.modalWrapper}>
          <TouchableOpacity activeOpacity={1} style={styles.modelContent}>
            <Text style={styles.Headertitle}>Select options</Text>
            {options?.map (opt => {
              if( !opt?.id) {
                return null;
              }
              const selected = value?.id === opt?.id
              return (
                <Text onPress={() => onSelect(opt)} key={opt?.title} style={[styles.optionstext,selected ? styles.selectedOption :{}]}>{opt?.title}</Text>
              )
            }
              
            )}
          </TouchableOpacity>
        </TouchableOpacity>
        
      </Modal>
      
    </View>
  )
}
export default InputBox