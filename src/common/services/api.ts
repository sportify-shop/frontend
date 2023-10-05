import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import config from '@/config';
import {GetHeaderBuilder} from "./headers";

export interface Period {
  from: string | undefined;
  to: string | undefined;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.API_BASE_URL}`,
    prepareHeaders: (headers, {getState}) => {
      return GetHeaderBuilder(headers, getState).prepareAuthorizationHeader().build();
    },
  }),
  tagTypes: ['auth', 'user', 'product', 'category'],
  endpoints: (builder) => ({}),
})

export const {} = api;
