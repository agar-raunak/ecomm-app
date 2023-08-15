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
    color:colors.grey,
  },
  eye: {
    width: 24,
    height:24,
    marginRight:20,
  },
  arrow:{
    height:24,
    width:24,
    marginHorizontal:16,
    transform: [{rotate: '90deg'}]
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
    color: colors.lightGrey,
},
  modalWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,

  },
  modelContent:{
    backgroundColor:colors.white,
    borderRadius:8,
    padding:16,
    width:'80%'
  },
  Headertitle:{
    color:colors.black,
    marginBottom:16,
    fontSize:16,
  },
  optionstext: {
    color: colors.black,
    paddingVertical:4,
    fontSize:15,
  },
  selectedOption: {
    color: colors.blue,
    fontWeight:'bold'
  }
})