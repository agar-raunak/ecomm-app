const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    marginBottom:20,
  },
  title: {
    // marginVertical:8,
    color:colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  fillerbox: {
    marginTop:2,
    borderRadius: 14,
    borderWidth:1,
    fontSize:16,
    borderColor:colors.grey,
    flexDirection: "row",
    alignItems: 'center',
    height:60,
  },
  input: {
    // borderWidth:1,
    paddingHorizontal:16,
    paddingVertical:20,
    flex:1,
  },
  eye: {
    width: 24,
    height:24,
    marginRight:20,
  }
})