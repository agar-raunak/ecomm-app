const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
 maincontainer: {
  marginHorizontal:20,
 },
 container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  // marginHorizontal:10,
  // paddingHorizontal:10,
 },
 title: {
  color: colors.black,
  fontSize: 16,
  fontWeight: 'bold',
  },
  icon : {
    width:24,
    height:24,
  },
  space: {
    width:24,
    // height:24,
  }
})