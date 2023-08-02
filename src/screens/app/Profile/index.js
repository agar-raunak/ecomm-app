import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const Profile = () => {

  return (
    <SafeAreaView>
      <ScrollView  style={styles.container}>
        <Text style={styles.text}>Prof</Text>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default React.memo(Profile);