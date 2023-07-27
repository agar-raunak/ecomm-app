import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
export const styles = StyleSheet.create({
  conatiner: {
    padding: 24,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    height:'100%',
  },
  titlecontainer: {
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight:'bold',
    textAlign:'center',
  },
  innertitle: {
    color: colors.orange,
    textDecorationLine:'underline',
  },
  footertext: {
    color: colors.blue,
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    marginTop:30,
  },

}) 