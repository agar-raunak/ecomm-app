const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
 container: {
  marginHorizontal: 8,
  marginVertical:10,
  justifyContent: 'space-between',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center'
 },
 title: {
  color: colors.grey,
  },
  imagecontainer : {
    backgroundColor: colors.lightgrey,
    padding: 16,
    borderRadius: 8,
    marginBottom:8,
  },
  image: {
    width:24,
    height:24,
  }
})