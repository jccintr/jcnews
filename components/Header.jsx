import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { text,cores } from '../theme';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.title}>JC NEWS</Text>
        
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  
  container:{
       flexDirection:'row',
       backgroundColor: cores.green,
       justifyContent: 'center',
       alignItems: 'center',
       paddingHorizontal:10,
       paddingVertical: 10,

  },
  title:{
    color: cores.white,
    fontWeight: 'bold',
    fontSize: text.xLarge,
  },
})