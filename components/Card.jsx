import {StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { cores, sizes } from '../theme';
import VerticalSpacer from './uteis/VerticalSpacer';

const Card = ({item,index}) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {item.urlToImage&&<Image style={styles.image} source={{uri: item.urlToImage ? item.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULSPiQKGEcCtCxrkr4t9Ub8U-Jwzv3kXu2RMOzQoihg&s',}} resizeMethod="resize"/>}
      <View style={{paddingHorizontal:2,marginHorizontal:2}}>
        <VerticalSpacer h={10}/>
        <Text style={{fontWeight:'bold',color:cores.black,fontSize:14,lineHeight:20}} className="text-sm text-gray-700 font-bold">
          {item.title}
        </Text>
        <VerticalSpacer h={10}/>
        <Text style={{marginHorizontal:2,textAlign:'justify',fontSize:12,lineHeight:16}}>{item.description}</Text>
        <VerticalSpacer h={10}/>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:2}}>
          <Text style={{color:cores.gray,fontSize:12}}>{item.author}</Text>
          <Text style={{color:cores.gray,fontSize:12}}>{item.publishedAt}</Text>
        </View>
        <VerticalSpacer h={10}/>
        <TouchableOpacity style={styles.botao} onPress={() => {}}>
                <Text style={{color:cores.white}}>Read More</Text>
                <AntDesign name="arrowright" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {item.urlToImage&&<View style={styles.source}>
        <Text style={{color:cores.white}}>{item.source.name}</Text>
      </View>}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  
    container:{
        
        marginHorizontal:10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        borderWidth:1,
        borderColor: cores.lightGrey,
        borderRadius:8,
    },
    image:{
        width: '100%',
        height: 200,
        borderRadius:10,
    },
    botao:{
        flexDirection: 'row',
        backgroundColor: cores.green,
        paddingHorizontal:4,
        paddingVertical: 5,
        width: 130,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    source:{
       position:'absolute',
       top: 10,
       right: 15,
       backgroundColor: cores.green,
       borderRadius:5,
       paddingHorizontal:5,
       paddingVertical:5,
       opacity: 0.7,
    }
   
  })
