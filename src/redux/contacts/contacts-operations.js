import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContact = createAsyncThunk('phonebook/fetchContact', async () => {
  const contacts = await axios.get('/contacts');
  return contacts.data;
});

export const addContact = createAsyncThunk('phonebook/addContact', async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('phonebook/deleteContact', async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
});
