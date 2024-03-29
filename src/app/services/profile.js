import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@env';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    putImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `/profile/${localId}.json`,
        method: 'PUT',
        body: { image },
      }),
    }),
    getImage: builder.query({
      query: (localId) => `/profile/${localId}.json`,
    }),
    putUserLocation: builder.mutation({
      query: ({ localId, locationFormatted }) => ({
        url: `/userLocation/${localId}.json`,
        method: 'PUT',
        body: locationFormatted,
      }),
    }),
    getUserLocation: builder.query({
      query: (localId) => `/userLocation/${localId}.json`,
    }),
  }),
});

export const {
  usePutImageMutation,
  useGetImageQuery,
  usePutUserLocationMutation,
  useGetUserLocationQuery,
} = profileApi;
