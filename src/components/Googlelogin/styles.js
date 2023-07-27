const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical:10,
    borderRadius:10,
    alignItems:'center',
    width:'40%',
    alignSelf:'center',
    backgroundColor:colors.darkgrey,
  },
  image:
  {
    width:30,
    height:30,
    // alignSelf:'center',
  }
})