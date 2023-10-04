import {api} from '@/common/services/api';
import { ProductGender, ProductModel, ProductRequest, ProductResponse } from './models/product.model';

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
    getProducts: builder.query<ProductResponse[], {name: string, maxPrice: number, gender: ProductGender, categoryId: number}>({
      query: ({ name, maxPrice, gender, categoryId }) => {
        // @ts-ignore
        const queryParams = new URLSearchParams({ name, maxPrice, gender, categoryId });

        return `/products?${queryParams.toString()}`
      },
      transformResponse: (res: { products: ProductResponse[] }) => res.products.map((elt) => elt),
      providesTags: ['product'],
    }),
  }),
});

export const { usePostProductMutation, useGetProductsQuery } = productApi;
