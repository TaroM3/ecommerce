import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@env';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: ({ localId, order }) => ({
        url: `/orders/${localId}.json`,
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['Orders'],
    }),
    getOrders: builder.query({
      query: (localId) => `/orders/${localId}.json`,
      transformResponse: (response) => {
        const data = Object.entries(response).map((item) => {
          return {
            id: item[0],
            ...item[1],
          };
        });
        return data;
      },
      providesTags: ['Orders'],
    }),
  }),
});

export const { usePostOrderMutation, useGetOrdersQuery } = ordersApi;
