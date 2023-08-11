import { configureStore } from '@reduxjs/toolkit';

import { dateReducer } from './date/dateSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
  },
});
