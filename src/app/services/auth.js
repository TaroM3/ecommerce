import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '@env';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://identitytoolkit.googleapis.com/v1/',
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: `accounts:signUp?key=AIzaSyCZ7WhCe8maArHucFPNLXWPpsLNslX1sCc${API_KEY}`,
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: `accounts:singInWithPassword?key=${API_KEY}`,
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
