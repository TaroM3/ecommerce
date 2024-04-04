import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_IP, SERVER_PORT } from '@env';

const url = 'http://' + `${SERVER_IP}` + ':' + `${SERVER_PORT}/`;

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    postCreatePaymentIntent: builder.mutation({
      query: (data) => ({
        url: 'payments/intent',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { usePostCreatePaymentIntentMutation } = paymentApi;
