import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    padding: 24,
    
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize:16,
    color: colors.grey,
    marginBottom:16,
    // flex:1
  },
  item : {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  sectionHeader: {
    flexDirection:'row',
    justifyContent: "space-between",
  },
  editicon: {
    height:24,
    width:24,
  },
  footer: {
    height:50,
  },
  button: {
    paddingVertical:12,
    marginTop:16,
  }
}) 