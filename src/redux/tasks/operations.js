import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// UPDATE BACKEND URL!
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchMonth',
  async ({ year, month }, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/?year=${year}&month=${month}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
