const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    marginBottom:20,
    paddingHorizontal: 16,
    paddingVertical:12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  label: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom:6,
  },
  input: {
    color: colors.blue,
    fontSize: 14,
    // marginTop: 6,
    fontWeight: '500',
  },

})