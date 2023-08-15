import React, { useState } from "react";
import { Text, ScrollView , View, Linking, Image, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/Header";
import Listitem from "../../../components/Listitem";
import Button from "../../../components/Button";
import EditableBox from "../../../components/EditableBox";

const Settings = ({navigation}) => {
  const onItempress = () => {
    Linking.openURL('http://google.com')
  }
  const [editing,setEditing]= useState(false);
  const [values,setValues] = useState({name: 'user', email : 'user@email.com'})
  const oneEditPress= () => {
    setEditing(true);
  }

  const onChange = (key,value) => {
    setValues(v => ({...v, [key]: value}))
  }

  const onSave = () => {
    setEditing(false);
  }

  return (
    <SafeAreaView >
      <Header showBack onBackpress={navigation.goBack} title='Settings' showLogout/>
      <ScrollView  style={styles.container}>
        <View style = {styles.sectionHeader}>
          <Text style ={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={oneEditPress}>
            <Image style = {styles.editicon} source={require('./../../../assets/edit.png')}/>
          </Pressable>
        </View>
        <EditableBox onChangeText= {(v)=>onChange('name',v)} label="Name" value={values.name} editable={editing}/>
        <EditableBox  onChangeText= {(v)=>onChange('email',v)} label="Email" value={values.email} editable={editing}/>
        {editing ? (<Button style={styles.button} onPress={onSave} title="Save"/>): null}
        
        <Text style={[styles.sectionTitle,{marginTop:30}]}>Help Center</Text>
        <Listitem onPress={onItempress} style={styles.item} title="FAQ"/>
        <Listitem onPress={onItempress} style={styles.item} title=" Contact us"/>
        <Listitem onPress={onItempress} style={styles.item} title="Privacy & terms"/>
        <Text style={styles.footer}></Text>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default React.memo(Settings);