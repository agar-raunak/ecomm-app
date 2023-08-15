// const { StyleSheet, Dimensions, Dimensions } = require("react-native");
import { colors } from "../../utils/colors";
import { StyleSheet, Dimensions } from "react-native";
// import { Dimensions } from "react-native";
const { height } = Dimensions.get('window');
export const styles = StyleSheet.create({
 safe: {
  borderWidth: 1,
  flex: 1,
 },
 container: {
  // borderWidth:1,
 },
 title: {
  color: colors.textgrey,
  // paddingVertical:8,
  fontSize: 24,
  marginTop:40,
  fontWeight:'500'
  },
  image: {
    width:'100%',
    height:height*0.45,
    borderRadius:10,
    marginRight: 20,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    marginTop:-40,
    paddingHorizontal: 24,
  },
  price : {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.darkgrey,
  },
  description : {
    // marginTop:20,
    color: colors.black  ,
    fontWeight: '300',
    fontSize: 16,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: "center",
    // marginHorizontal: 10,
  },
  backcontainer: {
    backgroundColor: colors.white,
    position: "absolute",
    padding: 8,
    // marginHorizontal: 10,
    marginVertical: 10,
    marginHorizontal:10,
    borderRadius: 5,
    // marginRight:16,
  },
  backicon: {
    height: 24,
    width: 24,
  },
  bookmarkcontainer: {
    backgroundColor: colors.lightgrey,
    padding: 16,
    // marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 5,
    marginRight:16,
  },
  button: {
    flex:1,
  },
  bookmark: {
    height: 24,
    width: 24,
    // padding:10,
  }
  
})