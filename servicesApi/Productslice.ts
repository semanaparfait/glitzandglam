import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query";


export const  Apislice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products/products",
        }),
        getproductById: builder.query({
            query: (id: number) => `/products/product/${id}`,
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: "/products/addproduct",
                method: "POST",
                body: product,
            }),
        }),
    }),
})