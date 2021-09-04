import { createSelector } from 'reselect';

const countingSelector = state => state.countingReducer;

const getCount = createSelector(
  [countingSelector],
  countSelectorState => countSelectorState.count,
);

export { getCount };
