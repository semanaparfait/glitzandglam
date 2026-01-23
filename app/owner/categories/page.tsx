"use client";

import { FormEvent, useState } from "react";
import { Pencil, Trash } from "lucide-react";
import {useCreateCategoryMutation,useGetCategoriesQuery} from '@/servicesApi/categorySlice';
import toast, { Toast } from "react-hot-toast";

type Tab = "view" | "add";



export default function Categories() {
    const { data, error, isLoading, refetch } = useGetCategoriesQuery(undefined);
    const [createCategory, { isLoading: isCreating }] = useCreateCategoryMutation();
    
    const [activeTab, setActiveTab] = useState<Tab>("view");
    const [imageType, setImageType] = useState<"file" | "url">("url");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        categoryName: "",
        categoryDescription: "",
        categoryImageUrl: "",
    })

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage(null);

        if (!formData.categoryName.trim()) {
            setMessage("Category name is required.");
            return;
        }

        if (imageType === "file" && !imageFile) {
            setMessage("Please choose an image file.");
            return;
        }

        if (imageType === "url" && !formData.categoryImageUrl.trim()) {
            setMessage("Please provide an image URL.");
            return;
        }

        try {
            let imageUrl = formData.categoryImageUrl;
            if (imageType === "file" && imageFile) {
                imageUrl = URL.createObjectURL(imageFile);
            }

            const categoryData = {
                categoryName: formData.categoryName,
                categoryDescription: formData.categoryDescription,
                categoryImageUrl: imageUrl,
            };

            await createCategory(categoryData).unwrap();
            toast.success("Category created successfully!");
            
            setMessage("Category created successfully!");
            setFormData({
                categoryName: "",
                categoryDescription: "",
                categoryImageUrl: "",
            });
            setImageFile(null);
            refetch();
            setTimeout(() => {
                setActiveTab("view");
                setMessage(null);
            }, 1500);
        } catch (error: any) {
            setMessage(error?.data?.message || "Failed to create category. Please try again.");
        }
    };
   if(isLoading){
    return <p>Loading...</p>
   }
   if(error){
    return <p>Error loading categories.. :</p>
   }
    return (
        <main className="max-w-5xl mx-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Categories</h1>
                    <p className="text-sm text-gray-600">View existing categories or add a new one.</p>
                </div>
                <div className="inline-flex rounded-md border border-gray-200 bg-white shadow-sm">
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-l-md ${activeTab === "view" ? "bg-black text-white" : "text-gray-800"}`}
                        onClick={() => setActiveTab("view")}
                    >
                        View categories
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-r-md ${activeTab === "add" ? "bg-black text-white" : "text-gray-800"}`}
                        onClick={() => setActiveTab("add")}
                    >
                        Add category
                    </button>
                </div>
            </div>

            {activeTab === "view" && (
                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {data?.categories?.map((category: any) => (
                        <article key={category.id} className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300">
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                <img 
                                    src={category.categoryImageUrl} 
                                    alt={category.categoryName} 
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
                                    {category.categoryName}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                    {category.categoryDescription}
                                </p>
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
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-800" htmlFor="name">
                           Category Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={formData.categoryName}
                            onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
                            required
                            placeholder="e.g. Bracelets"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>

                    <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-800">Category Image</p>
                        <div className="flex items-center gap-4 text-sm">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="imageType"
                                    value="file"
                                    checked={imageType === "file"}
                                    onChange={() => setImageType("file")}
                                    className="h-4 w-4"
                                />
                                Upload file
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="imageType"
                                    value="url"
                                    checked={imageType === "url"}
                                    onChange={() => setImageType("url")}
                                    className="h-4 w-4"
                                />
                                Use image URL
                            </label>
                        </div>

                        {imageType === "file" ? (
                            <input
                                type="file"
                                accept="image/*"
                                
                                onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        ) : (
                            <input
                                type="url"
                                value={formData.categoryImageUrl}
                                onChange={(e) => setFormData({ ...formData, categoryImageUrl: e.target.value })}
                                placeholder="https://example.com/image.jpg"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-800" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.categoryDescription}
                            required
                            onChange={(e) => setFormData({ ...formData, categoryDescription: e.target.value })}
                            placeholder="Short description (optional)"
                            rows={3}
                            className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isCreating}
                        className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isCreating ? "Saving..." : "Save Category"}
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