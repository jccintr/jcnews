import { StyleSheet,StatusBar,ActivityIndicator,FlatList,View } from 'react-native';
import React, {useState,useEffect} from 'react';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cores,sizes } from '../theme';
import Api from '../Api';
import CategoryList from '../components/CategoryList';
import VerticalSpacer from '../components/uteis/VerticalSpacer';
import Card from '../components/Card';

const Home = () => {
    const [news,setNews] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    

    const getNews = async (category) => {
      setIsLoading(true);
      let json = await Api.getNews(category);
      setNews(json.articles);
      setIsLoading(false);
    }

    useEffect(()=>{
        getNews('general');
    }, []);

    const onSelectCategory = (category) => {
        getNews(category);
    }
  
  return (
    <SafeAreaView style={{paddingBottom:50}}>
        <StatusBar animated={true} backgroundColor={cores.green} barStyle="dark-content"/>
        <Header/>
        <VerticalSpacer h={10}/>
        <View>
           <CategoryList onSelect={onSelectCategory}/>
        </View>
        
        <VerticalSpacer h={5}/>
        <View style={{marginBottom:10}}>
            {isLoading? (<View><ActivityIndicator color={cores.green}  size={36} /></View>):(<FlatList
                  showsVerticalScrollIndicator={false}
                  data={news}
                  contentContainerStyle={{paddingBottom: 130}}
                  renderItem={({item, index}) =><Card item={item}  index={index} />}
                />)}
         </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
          width: sizes.width,
          alignItems:'center',
          justifyContent:'flex-start',
    }
})