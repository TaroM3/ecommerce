import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';

import { shopApi } from './services/shop';
import { authApi } from './services/auth';
import { profileApi } from './services/profile';
import { ordersApi } from './services/orders';
import { paymentApi } from './services/payment';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopApi.middleware,
      authApi.middleware,
      profileApi.middleware,
      ordersApi.middleware,
      paymentApi.middleware
    ),
});

setupListeners(store.dispatch);
