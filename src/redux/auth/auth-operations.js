import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async credential => {
    try {
      const user = await axios.post('/users/signup', credential);
      token.set(user.data.token);
      return user.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const logIn = createAsyncThunk('auth/logIn', async credential => {
  try {
    const user = await axios.post('/users/login', credential);
    token.set(user.data.token);
    return user.data;
  } catch (error) {
    return error.message;
  }
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    return;
  } catch (error) {
    return error.message;
  }
});

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.authorization.token;
  if (persistedToken === null) {
    return thunkApi.rejectWithValue();
  }

  token.set(persistedToken);

  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return error.message;
  }
});
