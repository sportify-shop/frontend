import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import config from '@/config';
import {GetHeaderBuilder} from "./headers";

export interface Period {
  from: string | undefined;
  to: string | undefined;
}

export interface AttachmentModel {
  url: string;
  size: number;
  type?: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.API_BASE_URL}`,
    prepareHeaders: (headers, {getState}) => {
      return GetHeaderBuilder(headers, getState).prepareAuthorizationHeader().build();
    },
  }),
  tagTypes: ['auth', 'user', 'product', 'category', 'file'],
  endpoints: (builder) => ({
    getFile: builder.query<AttachmentModel, { fileName: string }>({
      async queryFn({ fileName }) {
        const result = await fetch(`http://localhost:8000/file/${fileName}`);

        if (result.status !== 200) return { error: await result.json() };

        const blob: Blob = await result.blob();

        const blobType: string | undefined = blob.type.split('/').at(-1);

        return {
          data: {
            url: URL.createObjectURL(blob),
            size: blob.size,
            type: blobType,
          },
        };
      },
    }),
  }),
})

export const { useGetFileQuery, useLazyGetFileQuery } = api;
