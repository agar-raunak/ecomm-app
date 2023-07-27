const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container : {
    borderColor:colors.grey,
    borderWidth:1,
    borderRadius:4,
    width:22,
    height:22,
  },
  innercontainer: {
    backgroundColor:colors.grey,
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  checkicon:
  {
    width:12,
    height:9,

  }
})