const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom:20,
    alignItems:'center',
  },
  line: {
    height:1,
    flex:1,
    backgroundColor:colors.lightgrey,
  },
  text: {
    color: colors.blue,
    fontWeight: '500',
    marginHorizontal: 5,
  }
})