import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contacts-operations';
import { filterContacts } from './contacts-actions';

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});
const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
