import { toast } from "react-toastify";
import {
  FETCH_POSTS_LOADING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from "../actionTypes/exampleActionTypes";

import axios from "axios";
import postClient from "../../api/postClient";

export const fetchPosts = () => {
  return async dispatch => {
    dispatch(fetchPostsLoading(true));

    try {
      const response = await postClient.all();

      dispatch(fetchPostsSuccess(response.data));
      toast.success("Fetched posts successfully");
    } catch (err) {
      dispatch(fetchPostsFailure(err.message));
      toast.error("Fetching posts failed!");
    }

    dispatch(fetchPostsLoading(false));
  };
};

export const fetchPostsLoading = flag => ({
  type: FETCH_POSTS_LOADING,
  payload: flag
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error
});
