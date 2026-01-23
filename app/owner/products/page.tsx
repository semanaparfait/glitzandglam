"use client";

import { FormEvent, useState } from "react";
import { Pencil, Trash } from "lucide-react";
import {useCreateProductMutation,useGetProductsQuery} from '@/servicesApi/Productslice'
import {useGetCategoriesQuery} from '@/servicesApi/categorySlice'
import { products } from "@/app/(user)/components/Products";

type Tab = "view" | "add";

export default function Products() {
    const { data: productsData, isLoading: productsLoading, error: productsError, refetch } = useGetProductsQuery(undefined);
    const { data: categoriesData } = useGetCategoriesQuery(undefined);
    const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
    
    const [activeTab, setActiveTab] = useState<Tab>("view");
    const [message, setMessage] = useState<string | null>(null);
    const [imageUrls, setImageUrls] = useState<string>("");
    const [formData, setFormData] = useState({
        productName: "",
        productDescription: "",
        productNewPrice: "",
        productOldPrice: "",
        productInStock: "",
        categoryId: "",
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage(null);

        if (!formData.productName.trim()) {
            setMessage("Product name is required.");
            return;
        }

        if (!formData.productNewPrice || parseFloat(formData.productNewPrice) <= 0) {
            setMessage("Please provide a valid price.");
            return;
        }

        if (!formData.categoryId) {
            setMessage("Please select a category.");
            return;
        }

        if (!imageUrls.trim()) {
            setMessage("Please provide at least one image URL.");
            return;
        }

        try {
            const imageUrlsArray = imageUrls.split(',').map(url => url.trim()).filter(url => url);

            const productData = {
                productName: formData.productName,
                productDescription: formData.productDescription,
                productNewPrice: parseFloat(formData.productNewPrice),
                productOldPrice: formData.productOldPrice ? parseFloat(formData.productOldPrice) : undefined,
                productInStock: formData.productInStock ? parseInt(formData.productInStock) : 0,
                categoryId: formData.categoryId,
                productImageUrl: imageUrlsArray,
            };

            await createProduct(productData).unwrap();
            
            setMessage("Product created successfully!");
            setFormData({
                productName: "",
                productDescription: "",
                productNewPrice: "",
                productOldPrice: "",
                productInStock: "",
                categoryId: "",
            });
            setImageUrls("");
            
            refetch();
            
            setTimeout(() => {
                setActiveTab("view");
                setMessage(null);
            }, 1500);
        } catch (error: any) {
            setMessage(error?.data?.message || "Failed to create product. Please try again.");
        }
    };

    if (productsLoading) {
        return <p>Loading...</p>;
    }

    if (productsError) {
        return <p>Error loading products...</p>;
    }

    return (
        <main className="max-w-6xl mx-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
                    <p className="text-sm text-gray-600">View existing products or add a new one.</p>
                </div>
                <div className="inline-flex rounded-md border border-gray-200 bg-white shadow-sm">
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-l-md ${activeTab === "view" ? "bg-black text-white" : "text-gray-800"}`}
                        onClick={() => setActiveTab("view")}
                    >
                        View products
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-r-md ${activeTab === "add" ? "bg-black text-white" : "text-gray-800"}`}
                        onClick={() => setActiveTab("add")}
                    >
                        Add product
                    </button>
                </div>
            </div>

            {activeTab === "view" && (
                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {productsData?.products?.map((product: any) => (
                        <article key={product.id} className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300">
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                <img 
                                    src={product.productImageUrl?.[0] || '/sample.jfif'} 
                                    alt={product.productName} 
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
                                    {product.productName}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                    {product.productDescription}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-gray-900">${product.productNewPrice}</span>
                                    {product.productOldPrice && (
                                        <span className="text-sm text-gray-500 line-through">${product.productOldPrice}</span>
                                    )}
                                </div>
                                <p className="text-xs text-gray-500">Stock: {product.productInStock}</p>
                                <div className="flex gap-2 pt-3 border-t border-gray-100">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium text-sm transition-colors duration-200">
                                        <Pencil className="h-4 w-4" />
                                        Edit
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg font-medium text-sm transition-colors duration-200">
                                        <Trash className="h-4 w-4" />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            )}

            {activeTab === "add" && (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-sm border border-gray-200 rounded-lg p-5">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-800" htmlFor="productName">
                                Product Name *
                            </label>
                            <input
                                id="productName"
                                name="productName"
                                value={formData.productName}
                                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                                required
                                placeholder="e.g. Gold Bracelet"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-800" htmlFor="categoryId">
                                Category *
                            </label>
                            <select
                                id="categoryId"
                                name="categoryId"
                                value={formData.categoryId}
                                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            >
                                <option value="">Select a category</option>
                                {categoriesData?.categories?.map((category: any) => (
                                    <option key={category.id} value={category.id}>
                                        {category.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-800" htmlFor="productNewPrice">
                                New Price *
                            </label>
                            <input
                                id="productNewPrice"
                                name="productNewPrice"
                                type="number"
                                step="0.01"
                                min={1}
                                value={formData.productNewPrice}
                                onChange={(e) => setFormData({ ...formData, productNewPrice: e.target.value })}
                                required
                                placeholder="99.99"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-800" htmlFor="productOldPrice">
                                Old Price
                            </label>
                            <input
                                id="productOldPrice"
                                name="productOldPrice"
                                type="number"
                                step="0.01"
                                min={1}
                                value={formData.productOldPrice}
                                onChange={(e) => setFormData({ ...formData, productOldPrice: e.target.value })}
                                placeholder="149.99"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-800" htmlFor="productInStock">
                                Stock Quantity
                            </label>
                            <input
                                id="productInStock"
                                name="productInStock"
                                type="number"
                                min={0}
                                value={formData.productInStock}
                                onChange={(e) => setFormData({ ...formData, productInStock: e.target.value })}
                                placeholder="100"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-800" htmlFor="imageUrls">
                            Image URLs * (comma-separated)
                        </label>
                        <input
                            id="imageUrls"
                            name="imageUrls"
                            value={imageUrls}
                            onChange={(e) => setImageUrls(e.target.value)}
                            placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                        <p className="text-xs text-gray-500">Separate multiple URLs with commas</p>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-800" htmlFor="productDescription">
                            Description
                        </label>
                        <textarea
                            id="productDescription"
                            name="productDescription"
                            value={formData.productDescription}
                            onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                            placeholder="Product description"
                            rows={4}
                            className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isCreating}
                        className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isCreating ? "Saving..." : "Save Product"}
                    </button>
                </form>
            )}

            {message && (
                <div className={`text-sm border rounded-md px-3 py-2 ${
                    message.includes("successfully") 
                        ? "text-green-800 bg-green-50 border-green-200" 
                        : "text-red-800 bg-red-50 border-red-200"
                }`}>
                    {message}
                </div>
            )}
        </main>
    );
}