import { createSelector } from 'reselect';

const userSelector = state => state.user;

export const getUserId = createSelector(
  [userSelector],
  state => state.id
)
export const getUserName = createSelector(
  [userSelector],
  state => state.name
)
export const getUserEmail = createSelector(
  [userSelector],
  state => state.email
)
export const getIsSignedIn = createSelector(
  [userSelector],
  state => state.isSignedIn
)
