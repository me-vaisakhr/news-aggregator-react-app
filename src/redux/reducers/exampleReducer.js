import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_SUCCESS
} from "../actionTypes/exampleActionTypes";

const initialState = {
  posts: [],
  postsLoading: true,
  error: ""
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_LOADING:
      return {
        ...state,
        postsLoading: action.payload
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default exampleReducer;
