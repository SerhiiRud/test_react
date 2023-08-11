import { configureStore } from '@reduxjs/toolkit';

import { dateReducer } from './date/dateSlice';
import { tasksReducer } from './tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    tasks: tasksReducer,
  },
});
