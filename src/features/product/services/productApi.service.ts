import {api} from '@/common/services/api';
import { ProductGender, ProductRequest, ProductResponse, QueryOrderBy } from '../models/product.model';

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postProduct: builder.mutation<ProductResponse, ProductRequest>({
      query: (arg: ProductRequest) => {
        return {
          url: '/product',
          method: 'POST',
          body: arg,
        };
      },
      invalidatesTags: ['product', 'category'],
    }),
    getProducts: builder.query<ProductResponse[], {name?: string, maxPrice?: number, gender?: ProductGender, categoryId?: number, categoryName?: string, orderBy?: QueryOrderBy}>({
      query: ({ name, maxPrice, gender, categoryId, categoryName, orderBy }) => ({
        url: '/product',
        method: "GET",
        params: { name, maxPrice, gender, categoryId, categoryName, orderBy },
        redirect: "follow"
      }),
      providesTags: ['product', 'category'],
    }),
    getProductByName: builder.query<ProductResponse, { name: string }>({
      query: ({ name }) => ({
        url: '/product',
        method: "GET",
        params: { name },
        redirect: "follow"
      }),
      transformResponse: (response: ProductResponse[]) => response[0],
      providesTags: ['product', 'category'],
    }),
  }),
});

export const { 
  usePostProductMutation, 
  useGetProductsQuery, 
  useLazyGetProductsQuery, 
  useGetProductByNameQuery 
} = productApi;
