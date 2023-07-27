const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
 container:{
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom:20,
 },
 title: {
  color: colors.blue,
  fontSize:26,
  fontWeight: '500',
  paddingHorizontal:16.
 },
 image:{
  height:23,
  width:23,
 }
})