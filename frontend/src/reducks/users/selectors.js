import { createStore } from 'redux';
import { createSelector } from 'reselect';

const userSelector = state => state.user;

export const getUserId = createSelector(
  [userSelector],
  state => state.userId
)