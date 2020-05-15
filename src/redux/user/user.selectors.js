import { createSelector } from 'reselect';
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export const selectCurrentInput = createSelector(
  [selectUser],
  (user) => user.userInfo,
);

export const selectCurrentSigningState = createSelector(
  [selectUser],
  (user) => user.isSigningIn,
);
