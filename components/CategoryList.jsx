import { StyleSheet, Text, TouchableOpacity,FlatList } from 'react-native';
import React, {useState} from 'react';
import { cores } from '../theme';

const CategoryList = ({onSelect}) => {
    const [select, setSelect] = useState(0);
    const [category, setCategory] = useState([
        {
          id: 1,
          name: 'Top Headlines',
          category: 'general',
        },
        {
          id: 5,
          name: 'Sports',
          category: 'sports',
        },
        {
          id: 2,
          name: 'Business',
          category: 'business',
        },
        {
          id: 3,
          name: 'Entertainment',
          category: 'entertainment',
        },
        {
          id: 4,
          name: 'Health',
          category: 'health',
        },
        {
          id: 6,
          name: 'Science',
          category: 'science',
        },
        {
          id: 7,
          name: 'Technology',
          category: 'technology',
        },
        ]);

  return (
    <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
            return (
            <TouchableOpacity style={[styles.container,index===select?styles.containerSelected:'']} onPress={() =>{setSelect(index);onSelect(item.category)}}>
                <Text style={{color:index===select?cores.white:cores.black}}>{item.name}</Text>
            </TouchableOpacity>
            );
        }}
    />
  )
}

export default CategoryList

const styles = StyleSheet.create({
   container:{
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal:10,
    height: 30,
    borderRadius:8,
    marginHorizontal: 4,
    backgroundColor: cores.lightGrey,
    marginBottom:5,
   },
   containerSelected:{
    backgroundColor: cores.green,
   }
})