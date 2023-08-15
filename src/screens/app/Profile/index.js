import React, { useState } from "react";
import { Text, ScrollView , View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/Header";
import Listitem from "../../../components/Listitem";
import Button from "../../../components/Button";

const Profile = ({navigation}) => {
  const onSettingPress = () => {
    navigation.navigate("Settings");
  }

  const onListingpress = () => {
    navigation.navigate("CreateListing");
  }

  const onMyListingsPress = () => {
    navigation.navigate("MyListings");
  }

  return (
    <SafeAreaView >
      <Header title='Profile' showLogout/>
      <View  style={styles.container}>
        <View style={styles.content}>
        
          <Text style={styles.name}>User name</Text>
          <Text style={styles.email}>User Email</Text>
          <Listitem onPress = {onMyListingsPress} title= "My Listings" subtitle={"you have ${num} listings"}/>
          <Listitem onPress = {onSettingPress} title= "Settings" subtitle={"Account, FAQ, Contact"}/>
        </View>
        <Button onPress = {onListingpress} title= "add new listing"/>
      </View>
    </SafeAreaView>
    
  )
}

export default React.memo(Profile);