import {
  FETCH_NEWS_LOADING,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from "../actionTypes/fetchNewsActionTypes";

const initialState = {
  news: [],
  isLoading: true,
  error: ""
};

const fetchNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload
      };

    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default fetchNewsReducer;
