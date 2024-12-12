import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../strings/strings';
import Config from 'react-native-config';
const WETHER_API_KEY = Config.WETHER_API_KEY;

const endpoints = {
  // All articles mentioning Apple from yesterday, sorted by popular publishers first
  apple: `everything?q=apple&from=2024-11-06&to=2024-11-06&sortBy=popularity&apiKey=${WETHER_API_KEY}`,
  tesla: `everything?q=tesla&from=2024-10-07&sortBy=publishedAt&apiKey=${WETHER_API_KEY}`,
};

export const NewsAPI = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    getNewsApple: builder.query({
      query: () => ({
        url: endpoints.apple,
        method: 'GET',
      }),
    }),
  }),
});




export const {useGetNewsAppleQuery} = NewsAPI;