
const API_KEY = 'f2761e607b7647d0a79131c4b43cd25d';
const BASE_API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
export default {
       
    getNews: async (category)=> {
        const response = await fetch(`${BASE_API}&category=${category}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
        });
        const json = await response.json();  
        return json;

    },
    
    searchNews: async (text)=> {
        const response = await fetch(`${BASE_API}&q=${text}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
        });
        const json = await response.json();  
        return json;

    },
    
   
  
   
};