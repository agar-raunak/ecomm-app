import React, { useState } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { products } from "../../../data/products";
import FavouriteItem from "../../../components/FavouriteItem";
import Header from "../../../components/Header";

const Favourite = ({navigation}) => {
 
  const renderItem = ({item}) => {
    
    const onProductPress = () => {
      navigation.navigate('ProductDetails',{product:item})
    }

    return (
      <FavouriteItem onPress={onProductPress} {...item} />
    )
  }
  return (
    <SafeAreaView>
      <Header title='Favourites'/>
        <FlatList data={products} renderItem={renderItem} keyExtractor= {(item)=> String(item?.id)}/>
    </SafeAreaView>
    
  )
}

export default React.memo(Favourite);