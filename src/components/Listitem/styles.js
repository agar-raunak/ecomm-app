const { StyleSheet } = require("react-native");
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom:20,
    padding: 16,
    justifyContent: 'space-between',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 8,
  },
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:6,
  },
  subtitle: {
    color: colors.grey,
    fontSize: 12,
    marginTop: 6,
  },
  arrow: {
    width: 32,
    height:32,
  }
})