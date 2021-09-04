import { createSelector } from "reselect";

const exampleSelector = state => state.exampleReducer;

const getLoading = createSelector(
  [exampleSelector],
  exampleReducerState => exampleReducerState.postsLoading
);

const getPosts = createSelector(
  [exampleSelector],
  exampleReducerState => exampleReducerState.posts
);

const getError = createSelector(
  [exampleSelector],
  exampleReducerState => exampleReducerState.error
);

export { getLoading, getPosts, getError };
