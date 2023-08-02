import React, {useState} from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import InputBox from '../../components/InputBox';
const Header = ({ title, onBackpress, onLogout, showLogout, showSearch, showBack, onSearch, keyword}) => {
  const [showSeachInput, setshowSearchInput]= useState(false);
  const onSearchClick = () => {
    setshowSearchInput(s => !s)
  }
  return (
    <View style={styles.maincontainer}>
      <View style= {styles.container}>
      {showBack? (
        <Pressable onPress={onBackpress} hitSlop={20}>
          <Image style={styles.icon} source={require('../../assets/back.png')} />
        </Pressable>
      ): showSearch ?(
        <Pressable onPress={onSearchClick} hitSlop={20}>
          <Image style={styles.icon} source={require('../../assets/search.png')} />
        </Pressable>
      ): <View style={styles.blank}/>}
      <Text style={styles.title}> {title}</Text>
      {showLogout ? (
        <Pressable onPress={onLogout} hitSlop={20}>
        <Image style={styles.icon} source={require('../../assets/logout.png')} />
        </Pressable>
      ): <View style={styles.blank}/>}
      
      </View>
      {showSeachInput? (
        <InputBox onChangeText={onSearch} value={keyword} placeholder="type your keyword..."/>
      )
      :null}
    </View>
    
  )
}
export default React.memo(Header);