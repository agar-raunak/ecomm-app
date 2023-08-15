import React from "react";
import {  FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { products } from "../../../data/products";
import FavouriteItem from "../../../components/FavouriteItem";
import Header from "../../../components/Header";

const MyListings = ({navigation}) => {
 
  const goBack  = () =>{
    navigation.goBack();
  }
  const renderItem = ({item}) => {
    
    const onProductPress = () => {
      navigation.navigate('ProductDetails',{product:item})
    }

    return (
      <FavouriteItem icon={require('../../../assets/delete.png')} onPress={onProductPress} {...item} />
    )
  }
  return (
    <SafeAreaView>
      <Header title='My Listings' showBack onBackpress={goBack}/>
        <FlatList data={products} renderItem={renderItem} keyExtractor= {(item)=> String(item?.id)}/>
    </SafeAreaView>
    
  )
}

export default React.memo(MyListings);