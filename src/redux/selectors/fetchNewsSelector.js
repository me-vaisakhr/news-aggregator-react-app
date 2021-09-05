import { createSelector } from "reselect";

const fetchNewsSelector = state => state.fetchNewsReducer;

const getLoading = createSelector(
  [fetchNewsSelector],
  fetchNewsSelectorState => fetchNewsSelectorState.isLoading
);

const getNews = createSelector(
  [fetchNewsSelector],
  fetchNewsSelectorState => fetchNewsSelectorState.news
);

const getError = createSelector(
  [fetchNewsSelector],
  fetchNewsSelectorState => fetchNewsSelectorState.error
);

export { getLoading, getNews, getError };
