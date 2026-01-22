import {baseAPI} from '@/servicesApi/baseApi'
import { Category } from '@/types/useTypes';

const categoryApi = baseAPI.injectEndpoints({
    endpoints:(builder) => ({
        getCategories: builder.query({
            query: () => '/category/getCategories',
            // providesTags: ['Categories'],
        }),
        createCategory: builder.mutation<Category, Partial<Category>>({
            query: (category: Partial<Category>) => ({
                url: '/category/createCategory',
                method: 'POST',
                body: category,
            }),
            // invalidatesTags: ['Categories'],
        }),

    })
})

export const { useGetCategoriesQuery, useCreateCategoryMutation } = categoryApi;
