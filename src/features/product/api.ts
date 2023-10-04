import {api} from '@/common/services/api';
import { ProductModel, ProductRequest, ProductResponse } from './models/product.model';

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postProduct: builder.mutation<ProductResponse, ProductRequest>({
      query: (arg: ProductRequest) => {
        return {
          url: '/products',
          method: 'POST',
          body: arg,
        };
      },
      transformResponse: (res: { product: ProductModel }) => ({...res.product}),
      invalidatesTags: ['product'],
    }),
    getProducts: builder.query<ProductResponse[], void>({
      query: () => `/product`,
      transformResponse: (res: { products: ProductResponse[] }) => res.products.map((elt) => elt),
      providesTags: ['product'],
    }),
  }),
});

export const { usePostProductMutation, useGetProductsQuery } = productApi;
