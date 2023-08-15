const { StyleSheet, Dimensions } = require("react-native");
import { colors } from "../../utils/colors";

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
 container: {
  marginHorizontal:24,
  flexDirection:'row',
  borderBottomWidth:1,
  borderColor: colors.borderColor,
  paddingVertical: 16,
 },
 title: {
  color: colors.textgrey,
  paddingVertical:8,
  },
  image: {
    width:100,
    height:100,
    borderRadius:10,
    marginRight: 20,
  },
  content: {
    flex:1,
  },
  price:{
    color: colors.black,
  },
  icon: {
    width:24,
    height:24,
    marginLeft:8,
  }
})