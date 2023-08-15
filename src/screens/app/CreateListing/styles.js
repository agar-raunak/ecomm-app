import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    padding: 24,
    
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize:14,
    color: colors.blue,
    marginBottom:16,
    // flex:1
  },
  uploadContainer:{
    width:100,
    height:100,
    borderRadius:8,
    borderWidth:1,
    borderColor: colors.grey,
    borderStyle: 'dotted',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:8,
  },
  uploadCircle: {
    width:32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightgrey,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  plus: {
    color:colors.white,
    fontSize:28,
    marginTop:-5,

  },
  imagecont: {

  },
  delete: {
    width:24,
    height:24,
  },
  image:{
    height:100,
    width:100,
    borderRadius: 8,
    borderWidth:1,
    // marginRight:8,
  },
  imagerow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  textarea: {
    minHeight: 150,
    paddingTop: 16,
},
button:{
  marginBottom:100,
},
footer: {
  height: 50,
}
}) 