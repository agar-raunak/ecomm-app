import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
export const Chair = (props) =>{
  const { theme } = props; //object destructuring
  const  [isbig,setisBig] = useState(false);

  useEffect(() => {
    console.log('inside useeffects')
  }, [isbig])
  console.log('isBig :>>',isbig);
  const changestate = () => {
    setisBig(state => !state)
  }
  return (
    <Text style={{fontSize: isbig ? 24 : 12, color: theme === true ? 'grey': 'purple'}}  onPress={changestate}>This is a new chair</Text>
  )
}
