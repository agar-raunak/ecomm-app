import React, { useState, useEffect } from "react";
import { Text, ScrollView, FlatList,View } from "react-native";
import { styles } from "./styles";
import Header from '../../../components/Header';
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from './../../../data/categories';
import { products } from './../../../data/products';
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredProduct,setFilteredProduct] = useState(products);
  const [Keyword,setKeyword] = useState();
  console.log("keyword>>:", Keyword);
  useEffect(()=> {
    if(selectedCategory && !Keyword){
      const updateProducts = products.filter((product) => product.category === selectedCategory);
      setFilteredProduct(updateProducts);
      } else if (selectedCategory && Keyword){
        const updateProducts = products.filter((product) => product.category === selectedCategory && product?.title?.toLowerCase().includes(Keyword?.toLowerCase()));
        setFilteredProduct(updateProducts);
      } else if (!selectedCategory && Keyword){
        const updateProducts = products.filter((product) => product?.title?.includes(Keyword));
        setFilteredProduct(updateProducts);
      } else if (!selectedCategory && !Keyword){
        setFilteredProduct(products);
      }
    },[selectedCategory])

  const renderCategoryItem = ({item,index}) =>{
    return (
      <CategoryBox 
      isFirst={ index===0 } 
      title={item?.title} 
      image={item?.image} 
      onPress={() =>setSelectedCategory(item?.id)}
      isSelected={item?.id===selectedCategory}
      />
    )
  }

  const renderProductItem = ({item}) => {
    const onProductPress = (product)=> {
      navigation.navigate("ProductDetails", {product})
    };
    return (
      <ProductHomeItem onPress={()=> onProductPress(item)} {...item}/>
    )
  }
  
  return (
    <SafeAreaView>

        <Header showSearch onSearch={setKeyword} keyword={Keyword} title="Find All You Need"/> 
        <FlatList 
        showsHorizontalScrollIndicator={false} 
        style={styles.list} data ={categories} 
        horizontal 
        renderItem={renderCategoryItem} 
        keyExtractor={(item,index)=>String(index)}
        />
        <FlatList
          data={filteredProduct} 
          numColumns={2} 
          renderItem={renderProductItem} 
          keyExtractor={(item)=>String(item.id)} 
          style={styles.productlist}
          ListFooterComponent={<View style={{height:200}}/>}
         />

    </SafeAreaView>
    
  )
}

export default React.memo(Home);