import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'
import {baseAPI} from '@/servicesApi/baseApi'
export const store = configureStore({
  reducer: {
    // Add your reducers here
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

setupListeners(store.dispatch);