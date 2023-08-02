const { StyleSheet, Dimensions } = require("react-native");
import { colors } from "../../utils/colors";

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
 container: {
  margin: 8,
 },
 title: {
  color: colors.textgrey,
  paddingVertical:8,
  },
  image: {
    width:(width-64)/2,
    height:180,
    borderRadius:5,
  },
  price:{
    color: colors.black,
    // fontWeight:'500',
    // paddingBottom:8,
  }
})