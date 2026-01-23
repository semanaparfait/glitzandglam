import {baseAPI} from '@/servicesApi/baseApi'
import {Product} from '@/types/useTypes'



export const productApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/products/products',
            // providesTags: ['Products'],
        }),
        createProduct: builder.mutation<Product, Partial<Product>>({
            query: (product: Partial<Product>) => ({
                url: '/products/addproduct',  
                method: 'POST',
                body: product,
            }),
            // invalidatesTags: ['Products'],
        }), 
        deleteProduct: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id: string) => ({
                url: `/product/deleteProduct/${id}`,
                method: 'DELETE',
            }),
            // invalidatesTags: ['Products'],
        }),
        editProduct: builder.mutation<Product, Partial<Product> & { id: string }>({
            query: ({ id, ...product }) => ({
                url: `/product/editProduct/${id}`,
                method: 'PUT',
                body: product,
            }),
            // invalidatesTags: ['Products'],
        }),
    })

})

export const { useGetProductsQuery, useCreateProductMutation, useDeleteProductMutation, useEditProductMutation } = productApi;