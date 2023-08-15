import React, { useState } from "react";
import { FlatList, Image, Dimensions, TouchableOpacity, View } from "react-native";

import { styles } from './styles';

const {width} = Dimensions.get("window");

const ImageCarousel = ({ images}) => {
  const [activeIndex,setActiveIndex] = useState(0);

  const handleScrollEnd = (e) => {
    // console.log(e.nativeEvent);
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffset/width);
    setActiveIndex(index);
  }

  const renderImages = ({item}) => {
    return (
      <Image style={styles.image} source={item}/>
    )
  }
  return (
    <View>
      <FlatList horizontal pagingEnabled onMomentumScrollEnd={handleScrollEnd} style={styles.list} data={images} renderItem={renderImages} />

      <View style={styles.pagination}>
        {images?.map((_,i) => (
          <View key = {i} style={[styles.paginationLine, i === activeIndex ? styles.activeLine : {}]} />
        ))}
      </View>
    </View>
    

  )
}
export default React.memo(ImageCarousel);