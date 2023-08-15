import React, { useState } from "react";
import { Text, ScrollView , View, Linking, Image, Pressable, Touchable, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/Header";
import Listitem from "../../../components/Listitem";
import Button from "../../../components/Button";
import EditableBox from "../../../components/EditableBox";
import { launchImageLibrary } from 'react-native-image-picker';
import InputBox from "../../../components/InputBox";
import { categories } from "../../../data/categories";


const CreateListing = ({navigation}) => {
  
  const onChange = (value,key) => {
    setValues((val)=>({...val, [key]:value}))
  };
  const [images,setImages] = useState([]);

  const [values, setValues]= useState({});

  
  const goBack = () => {
    navigation.goBack();
  }

  const uploadNewImage = async () => {
    const result = await launchImageLibrary();

    if (result?.assets?.length){
      console.log("image length >0")
      setImages(list => ([...list,...result?.assets]))
    }
  }

  console.log("images>>",images)
  return (
    <SafeAreaView >
      <Header showBack={true} onBackpress={goBack} title='Create a new listing'/>
      
      <ScrollView  style={styles.container}>
        <KeyboardAvoidingView behavior='position'>

          <Text style ={styles.sectionTitle}>Upload Photos</Text>  
          <View style={styles.imagerow}>
            <TouchableOpacity onPress={uploadNewImage} style={styles.uploadContainer}>
              <View style={styles.uploadCircle}>
                <Text style={styles.plus}>+</Text>
              </View>
            </TouchableOpacity>
            {images?.map(image => {
              console.log("inside the image map function");
              <View key={image.fileName} style={styles.imagecont}>
                console.log("here");
                <Image  style={styles.image} source={{uri: image?.uri}}/>
                <Image style= {styles.delete} source={require('../../../assets/cross.png')}/>
              </View>
            })}
          </View>

          <InputBox placeholder="Listing Title" title="Title" value={values.title} onChangeText={(v)=>onChange(v,'title')}/>
          <InputBox placeholder="Select the category" title="Category" value={values.category} onChangeText={(v)=>onChange(v,'category')} type="picker" options={categories}/>
          <InputBox placeholder="Enter price in USD" title="Price" value={values.price} onChangeText={(v)=>onChange(v,'price')} keyboardType="numeric"/>
          <InputBox style={styles.textarea} placeholder="Tell us more" title="Description" value={values.description} onChangeText={(v)=>onChange(v,'description')} multiline/>
          </KeyboardAvoidingView>
          <Button title="Submit" style={styles.button} />
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default React.memo(CreateListing)