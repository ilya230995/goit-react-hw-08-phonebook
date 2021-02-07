import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { signUpUser, logIn, logOut, getUser } from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [signUpUser.fulfilled]: (_, { payload }) => payload.user,
  [logIn.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialUserState,
  [getUser.fulfilled]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [signUpUser.fulfilled]: (_, { payload }) => payload.token,
  [logIn.fulfilled]: (_, { payload }) => payload.token,
  [logOut.fulfilled]: () => null,
});
const error = createReducer(null, {
  [signUpUser.rejected]: (_, { payload }) => payload,
  [logIn.rejected]: (_, { payload }) => payload,
  [logOut.rejected]: (_, { payload }) => payload,
  [getUser.rejected]: (_, { payload }) => payload,
});

const isLoggedIn = createReducer(false, {
  [signUpUser.fulfilled]: () => true,
  [logIn.fulfilled]: () => true,
  [getUser.fulfilled]: () => true,
  [logOut.fulfilled]: () => false,
  [signUpUser.rejected]: () => false,
  [logIn.rejected]: () => false,
});
const isFetchingCurrentUser = createReducer(false, {
  [getUser.pending]: () => true,
  [getUser.fulfilled]: () => false,
  [getUser.rejected]: () => false,
});
export default combineReducers({
  user,
  isLoggedIn,
  token,
  error,
  isFetchingCurrentUser,
});
