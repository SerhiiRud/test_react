import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { dateReducer } from './date/dateSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
  },
});
