import { ApiClient } from "./apiClient";

let client = new ApiClient(process.env.REACT_APP_NEWS_API);

export default {
  getTopHeadlines(data) {
    const {search, language, sort} = data
    let qp = '' 
    console.log('DATA => ',data)
    if(search){
      qp+=`&q=${search}`
    }
    if(language){
      qp+=`&language=${language}`
    }
    if(sort){
      qp+=`&sortBy=${sort}`
    }
    console.log(`PATH 1=>/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=100${qp}`)
    return client.get(`/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=100${qp}`);
  },
  getSearchedNews(data) {
    const {search, language, sort} = data
    let qp = '' 
    console.log('DATA => ',data)
    if(search){
      qp+=`&q=${search}`
    }
    if(language){
      qp+=`&language=${language}`
    }
    if(sort){
      qp+=`&sortBy=${sort}`
    }
    console.log(`PATH =>/everything?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=100${qp}`)
    return client.get(`/everything?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=100${qp}`);
  }
};
