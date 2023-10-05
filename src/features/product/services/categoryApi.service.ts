import {api} from '@/common/services/api';
import { ProductGender, ProductModel, ProductRequest, ProductResponse, QueryOrderBy } from '../models/product.model';
import { CategoryModel, CategoryResponse } from '../models/category.model';

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse[], void>({
      query: () => ({
        url: '/category',
        method: "GET",
      }),
      providesTags: ['category','product'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
