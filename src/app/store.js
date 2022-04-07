import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from '../redux/api/movies';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // Controla los middleware y catching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
