import React, {useState} from "react";
import { Image, Pressable, Text, ScrollView, View , Linking} from "react-native";
import { styles } from './styles';
import InputBox from '../InputBox';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../Button";
import ImageCarousel from "../ImageCarousel";
const ProductDetails = ({navigation, route}) => {
  const { product }= route?.params || {};
  console.log("product>>",product);
  const onBackPress = () => {
    navigation.goBack();
  }
  const onContact = () => {
    // Make a phone call
    const phone = '1234567890';
    Linking.openURL('tel:123456789');
    // Send an email
    // Linking.openURL('mailto:supportmail@gmail.com');
  }
  return (
    <SafeAreaView style= {styles.safe}>

      <ScrollView style ={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images}/>
        ) : (
          <Image style={styles.image} source={product?.image}/>
        )
        }
        
        <View style = {styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          {/* <Text style={styles.description}>{product.description}</Text> */}
          {/* <Text style={styles.description}>{product.description}</Text> */}

        </View>
        <Pressable style={styles.backcontainer} onPress={()=>onBackPress()}>
          <Image  style = {styles.backicon} source={require('../../assets/back.png')}/>
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkcontainer}>
          <Image  style = {styles.bookmark} source={require('../../assets/bookmark.png')}/>
        </Pressable>
        <Button onPress={onContact} title="contact seller" style = {styles.button}/>
      </View>
    </SafeAreaView>
  )
}
export default React.memo(ProductDetails);