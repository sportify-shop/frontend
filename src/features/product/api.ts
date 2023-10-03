import {api} from '@/common/services/api';
import { ProductResponse } from './models/product';

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse[], void>({
      query: () => `/product`,
      transformResponse: (res: { products: ProductResponse[] }) => res.products.map((elt) => elt),
      providesTags: ['product'],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
