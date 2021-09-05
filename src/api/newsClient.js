import { ApiClient } from "./apiClient";

let client = new ApiClient(process.env.REACT_APP_NEWS_API);

export default {
  /**
   * getTopHeadlines is the endpoint for get all top headlines
   * @param data will have 3 things.
   * 1. search - key to search
   * 2. language - selected language default it will be english
   * 3. sort - option selected to apply sort the news list 
   */
  getTopHeadlines(data) {
    const {search, language, sort} = data
    let qp = '' 
    if(search){
      qp+=`&q=${search}`
    }
    if(language){
      qp+=`&language=${language}`
    }
    if(sort){
      qp+=`&sortBy=${sort}`
    }
    return client.get(`/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=100${qp}`);
  },
  /**
   * getSearchedNews is the endpoint for get searched news.
   * @param data will have 3 things.
   * 1. search - key to search
   * 2. language - selected language default it will be english
   * 3. sort - option selected to apply sort the news list 
   */
  getSearchedNews(data) {
    const {search, language, sort} = data
    let qp = '' 
    if(search){
      qp+=`&q=${search}`
    }
    if(language){
      qp+=`&language=${language}`
    }
    if(sort){
      qp+=`&sortBy=${sort}`
    }
    return client.get(`/everything?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=100${qp}`);
  }
};
