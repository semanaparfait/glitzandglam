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
        deleteCategory: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id: string) => ({
                url: `/category/deleteCategory/${id}`,
                method: 'DELETE',
            }),
            // invalidatesTags: ['Categories'],
        }),
        editCategory: builder.mutation<Category, Partial<Category> & { id: string }>({
            query: ({ id, ...category }) => ({
                url: `/category/editCategory/${id}`,
                method: 'PUT',
                body: category,
            }),
            // invalidatesTags: ['Categories'],
        }),


    })
})

export const { useGetCategoriesQuery, useCreateCategoryMutation, useDeleteCategoryMutation, useEditCategoryMutation } = categoryApi;
