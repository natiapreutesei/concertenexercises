import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/natiapreutesei/fake/concerten",
    withCredentials:false,
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});
export default {
    getAllConcerten(){
      return apiClient.get('/');
    },
    getConcerten(perPage, page){
        return apiClient.get('/?_limit='+perPage+'&_page='+page);
    },
    getConcert(id){
        return apiClient.get(`/`+id);
    }
}