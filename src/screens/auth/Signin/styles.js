import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems:'center',
    // marginBottom:20,
  },
  agreeText: {
    marginHorizontal:10,
    color:colors.blue,
  },
  button:{
    marginVertical:20,
  },
  footertext: {
    color: colors.blue,
    marginVertical:30,
    textAlign:'center',
  },
  footerlink: {
    fontWeight:'bold',
  }
}) 