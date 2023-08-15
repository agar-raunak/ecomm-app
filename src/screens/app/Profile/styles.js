import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  name: {
    color:colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  email: {
    color: colors.grey,
    fontSize: 14,
    marginBottom: 16,
  },
  content: {
    // borderWidth:1,
    // flex:1,
  }
}) 