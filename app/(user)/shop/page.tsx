"use client"
import { List } from "lucide-react"
import Link from "next/link";
import {useGetCategoriesQuery} from "@/servicesApi/categorySlice"
import { useGetProductsQuery } from "@/servicesApi/Productslice";
export default function Shop(){
    const { data: productsData, isLoading, error } = useGetProductsQuery(undefined);
    const { data: categoriesData } = useGetCategoriesQuery(undefined);
    if (isLoading) return <div className="loader">loading.... some products guy</div>;
    if (error) return <p>Error loading products.</p>;
   
    return(
        <div className="flex flex-col items-center justify-center mb-5">
        <div className="relative w-full h-64  rounded-lg md:overflow-hidden ">

        <img
            src="/shop/shop.jfif"
            alt="Shop"
            className="w-full h-full object-cover"
        />
        <p className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 text-white text-9xl md:text-[250px]  font-bold drop-shadow-lg">
            Shop
        </p>
                <div className="bg-white flex flex-wrap items-center justify-between md:w-[80%] w-[90%] py-3 px-5 rounded-t-2xl absolute md:bottom-[-10] top-50  left-1/2 transform -translate-x-1/2 ">
                    <h1 className="text-2xl font-semibold leading-relaxed">Get All You Need</h1>
                    <div>
                        <form action="">
                        <input type="search" placeholder="Search for any stuff..." className="border py-1.5 px-5 rounded-2xl" />
                        <button className=" hidden">Search</button>

                        </form>
                    </div>

                </div>
        </div>
                        <div className="w-full px-4 ">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Shop by Category</h2>
                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                                {categoriesData?.categories?.map((category: any) => (
                                    <div 
                                        key={category.id}
                                        className="group flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="relative mb-3 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-pink-50 to-purple-50 p-1">
                                            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-gray-100 group-hover:border-pink-300 transition-colors duration-300">
                                                <img 
                                                    src={category.categoryImageUrl} 
                                                    alt={category.categoryName} 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </div>
                                        <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 text-center px-2">
                                            {category.categoryName}
                                        </h3>
                                        <div className="mt-2 h-1 w-0 bg-gradient-to-r from-pink-400 to-purple-600 group-hover:w-12 transition-all duration-300 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

            {/* -----------shoping------------items */}
            <div className="flex gap-5 w-full px-2">

                <div className=" px-5 md:mt-0 mt-10">
                    <List/>

                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7 w-full px-4">
            {productsData?.products?.map((product: any) => (
                <div key={product.id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-300 flex flex-col">
                
                <Link href={`/shop/${product.id}`} className="relative">
                    <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 aspect-square overflow-hidden">
                        
                        <img 
                            src={product.productImageUrl instanceof Array ? product.productImageUrl[0] : product.productImageUrl} 
                            alt={product.productName} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                            {product.productOldPrice && (
                                <span className="bg-red-500 hidden text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                                    SALE
                                </span>
                            )}
                            {product.productInStock <= 10 && product.productInStock > 0 && (
                                <span className="bg-[var(--hover-nav)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                    {product.productInStock} LEFT
                                </span>
                            )}
                        </div>
                        {product.productOldPrice && (
                            <div className="absolute top-3 right-3 bg-white rounded shadow-xl p-2">
                                <div className="flex  items-center justify-center w-12 ">
                                    <span className="text-xs font-bold text-red-600 leading-tight">
                                        {Math.round(((product.productOldPrice - product.productNewPrice) / product.productOldPrice) * 100)}%
                                    </span>
                                    <span className="text-[8px] text-gray-600">OFF</span>
                                </div>
                            </div>
                        )}
                        {product.productInStock <= 0 && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                                <div className="bg-white text-gray-900 text-xs font-bold px-6 py-3 rounded-full uppercase tracking-widest shadow-2xl">
                                    Out of Stock
                                </div>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                </Link>

                {/* Product Info */}
                <div className="p-4 flex flex-col flex-grow">
                    <Link href={`/shop/${product.id}`}>
                        <h3 className="text-base font-bold text-gray-900 line-clamp-2  group-hover:text-black transition-colors ">
                            {product.productName}
                        </h3>
                        <p>{product.productDescription}</p>
                    </Link>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                        <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-2xl font-bold text-gray-900">
                                {product.productNewPrice.toLocaleString()} 
                            </span>
                            <span className="text-sm text-gray-600">RWF</span>
                        </div>
                        {product.productOldPrice && (
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm text-gray-400 line-through">
                                    {product.productOldPrice.toLocaleString()} RWF
                                </span>
                                <span className="text-xs text-green-600 font-semibold">
                                    Save {(product.productOldPrice - product.productNewPrice).toLocaleString()} RWF
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                        <button 
                            disabled={product.productInStock <= 0}
                            className="flex-1 py-2.5 px-3 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-900"
                        >
                            Add to cart
                        </button>
                        <button 
                            disabled={product.productInStock <= 0}
                            className="flex-1 py-2.5 px-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
            </div>
        </div>
    )
}