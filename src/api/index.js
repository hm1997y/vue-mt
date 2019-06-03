import axios from "@/axios.js";
var api = {
    searchHotWords(params){
        return axios.get('/api/meituan/header/searchHotWords.json',params);
    },
    search(params){
        return axios.get('/api/meituan/header/search.json',params);
    },
    getNavList(){
        return axios.get('/api/meituan/index/nav.json');
    },
    resultsByKeywords(){
        return axios.get('/api/meituan/index/resultsByKeywords.json');
    },
    goodsList(){
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getProvince(){
        return axios.get('/api/meituan/city/province.json')
    },
    getHotCity(){
        return axios.get('/api/meituan/city/hot.json')
    },
    cityList(){
        return axios.get('/api/meituan/city/cityList.json')
    },
    getRecentsCity(){
        return axios.get('/api/meituan/city/recents.json')
    },
    getPosition(){
        return axios.get('/api/meituan/city/getPosition.json')
    },
    login(params){
        return axios.get('/api/meituan/login',params);
    },
    register(params){
        return axios.get('/api/meituan/register',params);
    },
    recommend(){
        return axios.get('/api/meituan/list/recommend.json');
    }
    
    

    
    

    
  
    
    
    
    
 
}

export default api