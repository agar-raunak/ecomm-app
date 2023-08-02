import React, { useState } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { products } from "../../../data/products";
const Favourite = () => {
  const renderItem = () => {

  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <FlatList data={products} renderItem={renderItem}/>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default React.memo(Favourite);