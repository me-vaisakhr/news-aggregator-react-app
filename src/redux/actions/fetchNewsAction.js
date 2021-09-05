import { toast } from "react-toastify";
import {
  FETCH_NEWS_LOADING,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from "../actionTypes/fetchNewsActionTypes";

import newsClient from "../../api/newsClient";

export const fetchTopHeadlines = (options) => {
  return async dispatch => {
    dispatch(fetchNewsLoading(true));

    try {
      const response = await newsClient.getTopHeadlines(options);
      response.data.title = `Today's Top Headlines` 
      dispatch(fetchNewsSuccess(response.data));
      
    } catch (err) {
      dispatch(fetchNewsFailure(err.message));
      toast.error("Fetching news failed!");
    }
    dispatch(fetchNewsLoading(false));
  };
};

export const fetchSearchedNews = (data) => {
  const {search} = data
  return async dispatch => {
    dispatch(fetchNewsLoading(true));

    try {
      const response = await newsClient.getSearchedNews(data);
      response.data.title = `Searching : ${search}` 
      dispatch(fetchNewsSuccess(response.data));
    } catch (err) {
      dispatch(fetchNewsFailure(err.message));
      toast.error("Fetching news failed!");
    }
    dispatch(fetchNewsLoading(false));
  };
};

export const fetchNewsLoading = flag => ({
  type: FETCH_NEWS_LOADING,
  payload: flag
});

export const fetchNewsSuccess = news => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news
});

export const fetchNewsFailure = error => ({
  type: FETCH_NEWS_FAILURE,
  payload: error
});
